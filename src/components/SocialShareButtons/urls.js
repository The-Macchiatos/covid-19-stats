
const url = 'https://covid19-mauritius.com/';
const shareMessage = 'Check live statistics and daily charts and graphics for COVID-19 in Mauritius';

export const fbURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

export const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}%20${encodeURIComponent(url)}`;

export const linkedinURL = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(shareMessage)}&summary=${encodeURIComponent(
  shareMessage
  )}&source=${encodeURIComponent(url)}`;

