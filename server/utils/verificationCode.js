const generateVerificationCode = () => {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * 9000) + 1000;
  return randomNumber;
};

module.exports = { generateVerificationCode };
