export default (answers) => {

    const hasService = answers.components.useService;
    const serviceName = hasService ? answers.services.serviceName : '';

    const useEffectImport = hasService ? ', { useEffect }' : '';
    const useEffectString = hasService ? `useEffect(() => {
    ${serviceName}();
  }, []);
  ` : '';

    const serviceImport = hasService ?
        `import { ${serviceName} } from '../../services/api';` : '';

    return {
        init: `import React${useEffectImport} from 'react';
        ${serviceImport}
        
        export const ${answers.components.componentName} = () => {
          ${useEffectString}
          return <></>;
        }`,
        updates: []
    };
};
