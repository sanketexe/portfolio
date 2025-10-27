import React from 'react';
import { serviceRecord } from '../../data/certifications';

const ServiceRecordSection = () => {
  return (
    <section id="service-record">
      <h2 className="section-title">Experience</h2>
      
      <div className="grid grid-2">
        {serviceRecord.map(record => (
          <div key={record.id} className="card">
            <h3>{record.title}</h3>
            <p style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
              {record.unit}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>
              {record.duration}
            </p>
            <p>{record.commendation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceRecordSection;
