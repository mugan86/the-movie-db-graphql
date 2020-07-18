const COMMON_RESPONSE = `
    certifications {
        code
        details {
        meaning
        order
        certification
        }
    }
`;
const CERTIFICATION_MOVIES = `{
    certificationMovie {
      ${COMMON_RESPONSE}
    }
}`;

const CERTIFICATION_TV = `{
    certificationTv {
      ${COMMON_RESPONSE}
    }
}`;

module.exports = {
  CERTIFICATION_MOVIES,
  CERTIFICATION_TV,
};
