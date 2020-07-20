const DATA = require('../data/certification');
const certificationTv = () => DATA.CERTIFICATION_TV.certifications;
const certificationMovie = () => DATA.CERTIFICATION_MOVIES.certifications;
const certifications = (parent) => {
    const key = Object.keys(parent);
    const certications = [];
    key.map(code => {
        certications.push({
            code,
            details: parent[code]
        })
    });
    return certications;
}
const resolverQueries = {
    Query: {
        certificationTv,
        certificationMovie
    },
    // Es necesario hacer uso del resolver de types
    ResultCertification: {
        certifications
    }

}

module.exports = {
    resolverQueries
}