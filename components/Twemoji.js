// Define kebabCase function
const kebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-')

  
  // Define Twemoji component
const Twemoji = ({ emoji, size = 'twa-lg', className = '' }) => {
    let cls = `inline-block twa ${size} twa-${kebabCase(emoji)} ${className || ''}`;
    return <i className={cls.trim()} />;
};
  
export default Twemoji;