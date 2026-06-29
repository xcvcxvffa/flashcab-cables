import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowLeft, Zap, CheckCircle2, ShieldCheck, Settings2, Package, Maximize2, X } from 'lucide-react';
import Preloader from '../components/Preloader/Preloader';
import usePageSEO from '../hooks/usePageSEO';
import { productCategories } from '../data/productData';

const mapStaticProduct = (prod) => {
  const technicalDetails = Object.entries(prod.specs?.technicalData || {}).map(([key, value]) => ({ label: key, value: String(value) }));

  const features = [];
  if (prod.specs?.salientFeatures && prod.specs.salientFeatures.length > 0) {
    features.push({ title: 'Salient Features', description: `<ul class="list-disc pl-5">` + prod.specs.salientFeatures.map(f => `<li>${f}</li>`).join('') + `</ul>` });
  }
  if (prod.specs?.standardPacking) {
    const pkStr = Object.entries(prod.specs.standardPacking).map(([k, v]) => `<li><b>${k}:</b> ${v}</li>`).join('');
    features.push({ title: 'Packing & Construction', description: `<ul class="list-disc pl-5">${pkStr}</ul>` });
  }

  let tableHtml = "";
  if (!prod.specs?.specificationTable && prod.specs?.tableData && prod.specs.tableData.length > 0) {
    const headers = Object.keys(prod.specs.tableData[0]);
    tableHtml = `<table style="border-collapse: collapse; width: 100%;" border="1"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>` +
      prod.specs.tableData.map(row => `<tr>${headers.map(h => `<td>${row[h]}</td>`).join('')}</tr>`).join('') +
      `</tbody></table>`;
    if (prod.specs?.tableNotes && prod.specs.tableNotes.length > 0) {
      tableHtml += `<div class="table-notes mt-6 text-sm text-gray-500 font-medium space-y-1.5 border-t border-gray-100 pt-4">` +
        prod.specs.tableNotes.map(n => `<p class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>${n}</p>`).join('') +
        `</div>`;
    }
  }

  return {
    _id: `static_${prod.id}`,
    id: prod.id,
    slug: prod.id,
    name: prod.name,
    description: prod.specs?.application || '',
    imgList: [
      { img: prod.image },
      ...(prod.image2 ? [{ img: prod.image2 }] : [])
    ],
    specs: prod.specs || {},
    technicalDetails: technicalDetails,
    features: features,
    specificationHtml: tableHtml || prod.specs?.specificationHtml || '',
    specificationTable: prod.specs?.specificationTable || null,
    tableNotes: prod.specs?.tableNotes || [],
    subCategories: prod.subCategories || []
  };
};

const getCoresPreview = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes('3 core')) {
    return ['#ef4444', '#eab308', '#3b82f6']; // Red, Yellow, Blue
  } else if (lower.includes('4 core')) {
    return ['#ef4444', '#eab308', '#3b82f6', '#000000']; // Red, Yellow, Blue, Black
  } else if (lower.includes('2 core')) {
    return ['#ef4444', '#000000']; // Red, Black
  }
  return null;
};

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const { pageSettings } = usePageSEO('products');
  const { productId } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubId, setActiveSubId] = useState(null);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  const detailRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const rawFetchedProducts = data.data || [];
        const validStaticIds = productCategories.map(p => p.id);
        const fetchedProducts = rawFetchedProducts.filter(p => validStaticIds.includes(p.id) || validStaticIds.includes(p.slug));
        const fetchedSlugs = fetchedProducts.map(p => p.slug || p.id);

        const mappedDbProducts = fetchedProducts.map(dbProd => {
          const staticProd = productCategories.find(p => p.id === dbProd.id || p.id === dbProd.slug);
          if (staticProd) {
            // Completely merge static specs and subcategories to guarantee the rich specifications and details show up
            return mapStaticProduct({
              ...staticProd,
              ...dbProd,
              subCategories: staticProd.subCategories && staticProd.subCategories.length > 0 ? staticProd.subCategories : dbProd.subCategories,
              specs: staticProd.specs
            });
          }
          // Fallback mapping if no matching static product in local data
          return {
            ...dbProd,
            imgList: dbProd.imgList || [{ img: dbProd.image }, ...(dbProd.image2 ? [{ img: dbProd.image2 }] : [])],
            subCategories: dbProd.subCategories || [],
            technicalDetails: Object.entries(dbProd.specs?.technicalData || {}).map(([key, value]) => ({ label: key, value: String(value) })),
            features: []
          };
        });

        // Find static products that haven't been added to DB yet
        const staticFallbackProducts = productCategories
          .filter(p => !fetchedSlugs.includes(p.id))
          .map(mapStaticProduct);

        const combinedProducts = [...mappedDbProducts, ...staticFallbackProducts];

        setProducts(combinedProducts);

        if (productId) {
          const found = combinedProducts.find(p => p.id === productId || p.slug === productId);
          setActiveProduct(found || null);
          setActiveSubId(null);
          if (found && found.subCategories && found.subCategories.length > 0) {
            setExpandedCategoryId(found.id);
          }
        } else {
          setActiveProduct(null);
          setActiveSubId(null);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);

        // On completely failed API, load all static products
        const allStatic = productCategories.map(mapStaticProduct);
        setProducts(allStatic);
        if (productId) {
          const found = allStatic.find(p => p.id === productId || p.slug === productId);
          setActiveProduct(found || null);
          setActiveSubId(null);
          if (found && found.subCategories && found.subCategories.length > 0) {
            setExpandedCategoryId(found.id);
          }
        } else {
          setActiveProduct(null);
          setActiveSubId(null);
        }
        setLoading(false);
      });
  }, [productId]);

  const handleProductClick = (product) => {
    setActiveProduct(product);
    setActiveSubId(null);
    navigate(`/cable/${product.slug || product.id}`);
  };

  const handleSubCategoryClick = (product, subId) => {
    setActiveProduct(product);
    setActiveSubId(subId);
    navigate(`/cable/${product.slug || product.id}`);
  };

  // Scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeProduct]);

  // Keep active category expanded on navigation
  useEffect(() => {
    if (activeProduct && activeProduct.subCategories && activeProduct.subCategories.length > 0) {
      setExpandedCategoryId(activeProduct.id);
    }
  }, [activeProduct]);

  // Sidebar entry animation
  useGSAP(() => {
    if (activeProduct && sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [activeProduct]);

  // Detail View Animations
  useGSAP(() => {
    if (activeProduct && detailRef.current) {
      gsap.fromTo('.detail-hero-text',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo('.bento-box',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.bento-grid',
            start: "top 85%"
          }
        }
      );

      gsap.fromTo('.spec-table',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.spec-table',
            start: "top 90%"
          }
        }
      );
    }
  }, [activeProduct]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedGalleryIndex === null || !activeProduct) return;
      const gallery = activeProduct.imgList.slice(3).filter(imgObj => imgObj && imgObj.img);
      if (gallery.length === 0) return;

      if (e.key === 'Escape') {
        setSelectedGalleryIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedGalleryIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setSelectedGalleryIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
      }
    };

    if (selectedGalleryIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGalleryIndex, activeProduct]);

  const renderProductDetails = (product) => {
    let displayProduct = product;
    if (activeSubId && product.subCategories && product.subCategories.length > 0) {
      const sub = product.subCategories.find(s => s.id === activeSubId);
      if (sub) {
        displayProduct = {
          ...product,
          name: sub.name,
          specs: sub.specs,
          specificationTable: sub.specs?.specificationTable || null,
          tableNotes: sub.specs?.tableNotes || []
        };
      }
    }

    const specs = displayProduct.specs || {};

    return (
      <div className="product-details w-full animate-fade-in" ref={detailRef}>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 mb-8">
          <h2 className="text-3xl font-extrabold text-[#203a70] tracking-tight">{displayProduct.name}</h2>

          {displayProduct.imgList && displayProduct.imgList.length > 0 && (
            <div className="mt-2 flex justify-start">
              <img
                src={displayProduct.imgList[1]?.img || displayProduct.imgList[0]?.img}
                alt={displayProduct.name}
                className="max-h-[1500px] md:max-h-[800px] w-auto object-contain mix-blend-multiply"
              />
            </div>
          )}

          {/* Description Block */}
          {specs.description && (
            <div className="mt-4 text-gray-700 leading-relaxed text-[15px] space-y-4">
              {Array.isArray(specs.description) 
                ? specs.description.map((para, i) => <p key={i}>{para}</p>)
                : <p>{specs.description}</p>
              }
            </div>
          )}
        </div>

        {/* 2-Column Specs Layout */}
        <div className="cable-specs-grid">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Cable Standard */}
            {specs.cableStandard && (
              <div className="cable-spec-card">
                <div className="cable-spec-card-header">
                  Cable Standard
                </div>
                <div className="cable-spec-card-body">
                  {specs.cableStandard}
                </div>
              </div>
            )}

            {/* Salient Features */}
            {specs.salientFeatures && specs.salientFeatures.length > 0 && (
              <div className="cable-spec-card">
                <div className="cable-spec-card-header">
                  Salient Features
                </div>
                <div className="cable-spec-card-body">
                  <ol className="salient-features-list">
                    {specs.salientFeatures.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {/* Technical Data */}
            {specs.technicalData && Object.keys(specs.technicalData).length > 0 && (
              <div className="cable-spec-card">
                <div className="cable-spec-card-header">
                  Technical Data
                </div>
                <div className="cable-spec-card-body">
                  {Array.isArray(specs.technicalData) ? (
                    <div className="flex flex-col pt-3">
                      <h4 className="font-bold text-[#203a70] text-[16.5px] mb-3 tracking-wide">Electrical Characteristics</h4>
                      <div className="flex flex-col">
                        {specs.technicalData.map((item, idx) => {
                          const splitIdx = item.indexOf(':');
                          if (splitIdx > -1) {
                            const label = item.substring(0, splitIdx).trim();
                            const val = item.substring(splitIdx + 1).trim();
                            return (
                              <div key={idx} className="flex justify-between items-start !py-[18px] border-b border-gray-100 last:border-0">
                                <span 
                                  className="text-[#64748b] font-medium text-[15px] shrink-0" 
                                  dangerouslySetInnerHTML={{ __html: label }} 
                                />
                                <span className="font-semibold text-[#1e293b] text-[15px] text-right flex-1 ml-8 leading-relaxed">{val}</span>
                              </div>
                            );
                          }
                          return (
                            <div key={idx} className="py-[18px] border-b border-gray-100 last:border-0 text-[#64748b] text-[15px] leading-relaxed">
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    Object.entries(specs.technicalData).map(([key, value]) => (
                      <div key={key} className="technical-data-item">
                        <span className="technical-data-label">{key}</span>
                        <span className="technical-data-value">{value}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Construction */}
            {specs.construction && Object.keys(specs.construction).length > 0 && (
              <div className="cable-spec-card">
                <div className="cable-spec-card-header">
                  Construction
                </div>
                <div className="cable-spec-card-body">
                  {Object.entries(specs.construction).map(([key, value]) => (
                    <div key={key} className="standard-packing-item">
                      <span className="standard-packing-label">{key}</span>
                      <span className="standard-packing-value" dangerouslySetInnerHTML={{ __html: value }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Standard Packing */}
            {specs.standardPacking && Object.keys(specs.standardPacking).length > 0 && (
              <div className="cable-spec-card">
                <div className="cable-spec-card-body">
                  {Object.entries(specs.standardPacking).map(([key, value]) => (
                    <div key={key} className="standard-packing-item">
                      <span className="standard-packing-label">{key}</span>
                      <span className="standard-packing-value" dangerouslySetInnerHTML={{ __html: value }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Core Colour */}
            {specs.coreColour && (
              <div className="cable-spec-card">
                <div className="cable-spec-card-header">
                  Core Colour
                </div>
                <div className="cable-spec-card-body leading-relaxed">
                  {specs.coreColour}
                </div>
              </div>
            )}

            {/* Application */}
            {specs.application && (
              <div className="cable-spec-card">
                <div className="cable-spec-card-header">
                  Application
                </div>
                <div className="cable-spec-card-body leading-relaxed">
                  {Array.isArray(specs.application) ? (
                    <ul className="space-y-2 list-disc pl-5">
                      {specs.application.map((app, idx) => (
                        <li key={idx} className="text-[#64748b] text-[15px]">
                          {typeof app === 'string' ? (
                            <span className="text-[#203a70] font-medium">{app}</span>
                          ) : (
                            <>
                              <strong className="text-[#203a70] block mb-1">{app.title}:</strong>
                              {app.desc}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    specs.application
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Table Grid */}
        {displayProduct.specificationTable ? (
          <div className="detail-section-card spec-table mt-12 overflow-x-auto">
            <div className="table-heading-container">
              <span className="table-heading-bar"></span>
              <h3 className="table-heading-text">Complete Specification Data</h3>
            </div>
            <div className="premium-table-container">
              <table className="premium-spec-table min-w-[1000px]">
                <thead>
                  {displayProduct.specificationTable.headerRows ? (
                    displayProduct.specificationTable.headerRows.map((rowArr, rIdx) => (
                      <tr key={rIdx} className={rIdx > 0 ? "sub-header-row" : ""}>
                        {rowArr.map((header, idx) => {
                          const isObj = typeof header === 'object' && header !== null;
                          const label = isObj ? header.label : header;
                          const colSpan = isObj ? header.colSpan : 1;
                          const rowSpan = isObj ? header.rowSpan : 1;
                          return (
                            <th key={idx} colSpan={colSpan} rowSpan={rowSpan} dangerouslySetInnerHTML={{ __html: label }} />
                          );
                        })}
                      </tr>
                    ))
                  ) : (
                    <>
                      {displayProduct.specificationTable.headers && (
                        <tr>
                          {displayProduct.specificationTable.headers.map((header, idx) => {
                            const isObj = typeof header === 'object' && header !== null;
                            const label = isObj ? header.label : header;
                            const colSpan = isObj ? header.colSpan : 1;
                            const rowSpan = isObj ? header.rowSpan : 1;
                            return (
                              <th key={idx} colSpan={colSpan} rowSpan={rowSpan} dangerouslySetInnerHTML={{ __html: label }} />
                            );
                          })}
                        </tr>
                      )}
                      {displayProduct.specificationTable.subHeaders && (
                        <tr className="sub-header-row">
                          {displayProduct.specificationTable.subHeaders.map((sub, idx) => {
                            const isObj = typeof sub === 'object' && sub !== null;
                            const label = isObj ? sub.label : sub;
                            const colSpan = isObj ? sub.colSpan : 1;
                            const rowSpan = isObj ? sub.rowSpan : 1;
                            return (
                              <th key={idx} colSpan={colSpan} rowSpan={rowSpan} dangerouslySetInnerHTML={{ __html: label }} />
                            );
                          })}
                        </tr>
                      )}
                      {displayProduct.specificationTable.units && (
                        <tr className="sub-header-row" style={{ backgroundColor: '#2a4d94' }}>
                          {displayProduct.specificationTable.units.map((unit, idx) => (
                            <th key={idx} style={{ fontSize: '11px', fontWeight: '500', padding: '10px 8px' }}>
                              {unit}
                            </th>
                          ))}
                        </tr>
                      )}
                    </>
                  )}
                </thead>
                <tbody>
                  {displayProduct.specificationTable.rows && displayProduct.specificationTable.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={cIdx === 0 ? "primary-cell" : cIdx === row.length - 2 ? "mono-cell" : cIdx === row.length - 1 ? "highlight-cell" : ""}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {displayProduct.tableNotes && displayProduct.tableNotes.length > 0 && (
                <div className="table-notes mt-6 text-sm text-gray-500 font-medium space-y-1.5 border-t border-gray-100 pt-4">
                  {displayProduct.tableNotes.map((n, idx) => (
                    <p key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {n}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : displayProduct.specificationHtml ? (
          <div className="detail-section-card spec-table mt-12 overflow-x-auto">
            <div className="table-heading-container">
              <span className="table-heading-bar"></span>
              <h3 className="table-heading-text">Complete Specification Data</h3>
            </div>
            <div className="overflow-x-auto spec-html-container">
              <div dangerouslySetInnerHTML={{ __html: displayProduct.specificationHtml }} />
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      <div className="min-h-screen bg-white pt-24 pb-20">
        {/* Dynamic Breadcrumb Section */}
        <div
          className="breadcrumb-hero"
          style={{
            backgroundImage: activeProduct && activeProduct.imgList && activeProduct.imgList.length > 2 && activeProduct.imgList[2]?.img
              ? `url('${activeProduct.imgList[2].img}')`
              : `url('${pageSettings?.other_settings?.breadcrumb_image || '/assets/images/mega_cables.png'}')`
          }}
        >
          <h1 className="breadcrumb-title">
            <span key={activeProduct ? activeProduct.id : 'cable'} className="split-heading">
              {activeProduct ? activeProduct.name : 'Cable'}
            </span>
          </h1>

          {/* Breadcrumb Navigation */}
          <div className="breadcrumb-nav">
            <a href="/">Home</a>
            <span className="separator">/</span>

            {!activeProduct ? (
              <span className="active-crumb">Cable</span>
            ) : (
              <>
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveProduct(null); navigate('/cable'); }}>Cable</a>
                <span className="separator">/</span>
                <span className="active-crumb">{activeProduct.name}</span>
              </>
            )}
          </div>
        </div>

        <div className={`${activeProduct ? 'cable-detail-page-container' : 'cable-page-container'} flex flex-col gap-12 transition-all duration-500`}>
          {activeProduct ? (
            <div className="cable-detail-layout-grid">
              {/* Left Sidebar */}
              <aside className="cable-detail-sidebar">
                <nav className="space-y-1">
                  {products.map((prod) => {
                    const isActive = activeProduct && (activeProduct.id === prod.id || activeProduct.slug === prod.id);
                    const hasSub = prod.subCategories && prod.subCategories.length > 0;
                    const isExpanded = expandedCategoryId === prod.id;

                    return (
                      <div key={prod.id} className="cable-sidebar-item-container">
                        {hasSub ? (
                          <button
                            onClick={() => setExpandedCategoryId(prev => prev === prod.id ? null : prod.id)}
                            className={`cable-sidebar-btn ${isActive ? 'cable-sidebar-btn-active' : ''}`}
                          >
                            <span>{prod.name}</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleProductClick(prod)}
                            className={`cable-sidebar-btn ${isActive ? 'cable-sidebar-btn-active' : ''}`}
                          >
                            <span>{prod.name}</span>
                          </button>
                        )}

                        {/* Render nested subcategories if expanded */}
                        {hasSub && isExpanded && (
                          <div className="cable-sidebar-sub-list">
                            {prod.subCategories.map((sub, sIdx) => {
                              const isSubActive = activeSubId === sub.id;
                              return (
                                <button
                                  key={sub.id || sIdx}
                                  onClick={() => handleSubCategoryClick(prod, sub.id)}
                                  className={`cable-sidebar-sub-btn ${isSubActive ? 'cable-sidebar-sub-btn-active' : ''}`}
                                >
                                  {sub.name}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </aside>

              {/* Details Content */}
              <main className="cable-detail-main-content" ref={contentRef}>
                {renderProductDetails(activeProduct)}
              </main>
            </div>
          ) : (
            <main className="w-full min-w-0" ref={contentRef}>
              <div>
                <div className="products-header-section flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-100 pb-6 gap-6">
                  <div>
                    <h2 className="all-products-title section-title split-heading text-3xl lg:text-4xl mb-0 !text-[#203a70]">
                      All Cables
                    </h2>
                  </div>

                  {/* Premium Search Bar */}
                  <div className="custom-search-container relative mt-2 md:mt-0 w-full md:w-96">
                    <input
                      type="text"
                      placeholder="Search cables..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="custom-search-input w-full"
                    />
                    <svg className="custom-search-icon absolute top-1/2 transform -translate-y-1/2 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>

                {(() => {
                  const items = products.filter(item =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                  );

                  if (items.length === 0) {
                    return (
                      <div className="no-products-section text-center py-20">
                        <p className="text-[#203a70] text-xl font-semibold mb-2">No cables found matching "{searchQuery}"</p>
                        <p className="text-gray-500 text-sm">Try checking your spelling or searching for another query.</p>
                      </div>
                    );
                  }

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 product-grid-wrapper max-w-7xl mx-auto px-4 md:px-8 pb-20">
                      {items.map((item, idx) => (
                        <div
                          key={item.id}
                          onClick={() => handleProductClick(item)}
                          className="stagger-card group cursor-pointer flex flex-col items-start text-left animate-fade-in-up opacity-0"
                          style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
                        >
                          <div className="product-card-img-container rounded-2xl overflow-hidden relative transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl w-full mb-5 border border-gray-100">
                            {item.imgList && item.imgList.length > 0 && item.imgList[0]?.img ? (
                              <img
                                src={item.imgList[0].img}
                                alt={item.name}
                                className="product-card-img transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <Zap className="text-gray-300 w-16 h-16" />
                            )}
                            <div className="absolute bottom-0 left-0 w-full pointer-events-none product-card-img-gradient"></div>
                          </div>

                          <h3 className="product-card-title text-[15px] font-bold text-[#203a70] tracking-wide leading-snug">{item.name}</h3>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </main>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedGalleryIndex !== null && activeProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/90 transition-opacity animate-fade-in"
          onClick={() => setSelectedGalleryIndex(null)}
          style={{ zIndex: 99999 }}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center p-4 md:p-10">
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white hover:text-gray-200 bg-gray-800/80 hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center shadow-xl z-[100000] transition-all duration-300 hover:scale-110"
              onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex(null); }}
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* Slider Navigation */}
            {activeProduct.imgList && activeProduct.imgList.slice(3).filter(imgObj => imgObj && imgObj.img).length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 bg-gray-800/80 hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center shadow-xl z-[100000] transition-all duration-300 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    const gallery = activeProduct.imgList.slice(3).filter(imgObj => imgObj && imgObj.img);
                    setSelectedGalleryIndex((prev) => prev === 0 ? gallery.length - 1 : prev - 1);
                  }}
                >
                  <ArrowLeft size={24} strokeWidth={2.5} />
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 bg-gray-800/80 hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center shadow-xl z-[100000] transition-all duration-300 hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    const gallery = activeProduct.imgList.slice(3).filter(imgObj => imgObj && imgObj.img);
                    setSelectedGalleryIndex((prev) => prev === gallery.length - 1 ? 0 : prev + 1);
                  }}
                >
                  <ArrowRight size={24} strokeWidth={2.5} />
                </button>
              </>
            )}

            <img
              key={selectedGalleryIndex}
              src={activeProduct.imgList.slice(3).filter(imgObj => imgObj && imgObj.img)[selectedGalleryIndex]?.img}
              alt="Gallery Full Size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
