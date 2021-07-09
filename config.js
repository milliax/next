const dev = process.env.NODE_ENV !== 'production';

module.exports.server = dev ? 'https://raw.sivir.pw/' : 'https://raw.sivir.pw/';