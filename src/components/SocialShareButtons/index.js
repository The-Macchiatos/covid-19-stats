import React from 'react';
import Button from '../base/Button';
import Link from '../base/Link';
import {FacebookIcon, WhatsappIcon, LinkedinIcon} from './icons';
import {fbURL, linkedinURL, whatsappURL} from './urls';
import {styles} from './styles';

const ShareButtons = () => {
  return (
    <>
      <Link
        href={fbURL}
        target="_blank" rel="noopener" aria-label="Share on Facebook">
        <Button __css={styles.facebook} backgroundColor={styles.facebook.backgroundColor}>
          <FacebookIcon/>
        </Button>
      </Link>
      <Link
        href={whatsappURL}
        target="_blank" rel="noopener" aria-label="Share on WhatsApp">
        <Button __css={styles.whatsapp} backgroundColor={styles.whatsapp.backgroundColor}>
          <WhatsappIcon/>
        </Button>
      </Link>
      <Link
        href={linkedinURL}
        target="_blank" rel="noopener" aria-label="Share on LinkedIn">
        <Button __css={styles.linkedin} backgroundColor={styles.linkedin.backgroundColor}>
          <LinkedinIcon/>
        </Button>
      </Link>
    </>
  );
};

export default ShareButtons;
