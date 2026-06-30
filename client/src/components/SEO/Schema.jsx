import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function Schema({ schemaData }) {
  if (!schemaData) return null;

  // Ensure it's an array for multiple schemas, or single object
  const schemas = Array.isArray(schemaData) ? schemaData : [schemaData];

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

Schema.propTypes = {
  schemaData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};
