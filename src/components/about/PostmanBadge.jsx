import React from 'react';
import { Slide } from 'react-awesome-reveal';
const PostmanBadge = () => {
  return (
    <>
      <blockquote
        className='badgr-badge mb-0 shadow-3-strong p-4 rounded-2 vstack align-items-center gap-2'
        style={{
          fontFamily:
            'Helvetica, Roboto, &quot;Segoe UI&quot;, Calibri, sans-serif',
        }}>
        <Slide direction='down'>
          <a href='https://api.badgr.io/public/assertions/iwlBGFWkTBO1ibbf2vzYcg?identity__email=akarmakar846%40gmail.com'>
            <img
              width='120px'
              height='120px'
              src='https://api.badgr.io/public/assertions/iwlBGFWkTBO1ibbf2vzYcg/image'
              alt=''
            />
          </a>
        </Slide>
        <p
          className='badgr-badge-name'
          style={{
            hyphens: 'auto',
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
            margin: 0,
            fontSize: '16px',
            fontWeight: 600,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.25',
            letterSpacing: 'normal',
            textAlign: 'left',
            color: '#05012c',
          }}>
          Postman API Fundamentals Student Expert
        </p>
        <p
          className='badgr-badge-date'
          style={{
            margin: 0,
            fontSize: '12px',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: '1.67',
            letterSpacing: 'normal',
            textAlign: 'left',
            color: '#555555',
          }}>
          <strong
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontStretch: 'normal',
              lineHeight: '1.67',
              letterSpacing: 'normal',
              textAlign: 'left',
              color: '#000',
            }}>
            Awarded:{' '}
          </strong>
          Jul 31, 2023
        </p>
        <p style={{ margin: '16px 0', padding: '0' }}>
          <a
            className='badgr-badge-verify'
            target='_blank'
            rel='noreferrer'
            href='https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FiwlBGFWkTBO1ibbf2vzYcg%3Fidentity__email%3Dakarmakar846%2540gmail.com&amp;identity__email=akarmakar846%40gmail.com'
            style={{
              boxSizing: 'content-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 0,
              fontSize: '14px',
              fontWeight: 'bold',
              width: '48px',
              height: '16px',
              borderRadius: '4px',
              border: 'solid 1px black',
              textDecoration: 'none',
              padding: '6px 16px',
              // margin: '16px 0',
              color: 'black',
            }}>
            VERIFY
          </a>
        </p>
        <script
          async='async'
          src='https://badgr.com/assets/widgets.bundle.js'></script>
      </blockquote>
    </>
  );
};

export default PostmanBadge;
