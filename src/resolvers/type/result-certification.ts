import { IResolvers } from 'apollo-server-express';

const typeResultCertificationResolvers: IResolvers = {
  ResultCertification: {
    certifications: (parent) => {
      const key = Object.keys(parent);
      const certications: Array<object> = [];
      key.map((code) => {
        certications.push({
          code,
          details: parent[code],
        });
      });
      return certications;
    },
  },
};

export default typeResultCertificationResolvers;
