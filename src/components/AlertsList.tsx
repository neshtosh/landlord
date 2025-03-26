import React from 'react';
import { AlertTriangle, Droplet, Building2 } from 'lucide-react';

const alerts = [
  {
    id: 1,
    property: 'Sunset Heights',
    type: 'High Usage',
    message: 'Unusual water consumption detected in Unit 4B',
    severity: 'high',
    time: '2 hours ago',
  },
  {
    id: 2,
    property: 'Green Valley',
    type: 'Low Balance',
    message: 'Multiple tenants approaching minimum balance',
    severity: 'medium',
    time: '5 hours ago',
  },
  {
    id: 3,
    property: 'Blue Ridge',
    type: 'Maintenance',
    message: 'Scheduled meter maintenance required',
    severity: 'low',
    time: '1 day ago',
  },
];

const AlertsList = () => {
  return (
    <div className="divide-y divide-gray-200">
      {alerts.map((alert) => (
        <div key={alert.id} className="py-4 flex items-start space-x-4">
          <div className={`p-2 rounded-full ${
            alert.severity === 'high' 
              ? 'bg-red-100'
              : alert.severity === 'medium'
              ? 'bg-yellow-100'
              : 'bg-blue-100'
          }`}>
            <AlertTriangle className={`h-5 w-5 ${
              alert.severity === 'high'
                ? 'text-red-600'
                : alert.severity === 'medium'
                ? 'text-yellow-600'
                : 'text-blue-600'
            }`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">{alert.type}</h3>
              <span className="text-sm text-gray-500">{alert.time}</span>
            </div>
            <p className="mt-1 text-sm text-gray-600">{alert.message}</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Building2 className="h-4 w-4 mr-1" />
              {alert.property}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertsList;