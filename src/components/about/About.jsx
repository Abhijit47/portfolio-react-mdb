import React, { useState } from 'react';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import MyResume from '../../assets/images/Abhijit_Karmakar_Resume_11-07-2023.avif';
import CertificateModal from './CertificateModal';
import EducationModal from './EducationModal';

import { Zoom, Slide, Fade } from 'react-awesome-reveal';
import AchivementModal from './AchivementModal';

const About = () => {
  const [certificateModal, setCertificateModal] = useState(false);
  const [educationModal, setEducationModal] = useState(false);
  const [achivementModal, setAchivementModal] = useState(false);

  const toggleShowCertificate = () => setCertificateModal(!certificateModal);
  const toggleShowEducation = () => setEducationModal(!educationModal);
  const toggleShowAchivement = () => setAchivementModal(!achivementModal);

  return (
    <>
      <section id='about' className='bg-dark bg-gradient bg-opacity-25'>
        <MDBContainer
          fluid
          className='vstack align-items-center gap-3 p-3 gx-0'>
          {/* <!-- Resume file --> */}
          <Zoom triggerOnce>
            <MDBRow className='gx-0 pt-5'>
              <MDBCol lg={4} className='row shadow-3-soft m-auto gx-0'>
                <img
                  className=''
                  src={MyResume}
                  alt=''
                  loading='lazy'
                  // oncontextMenu={`{return false}`}
                  fetchpriority='auto'
                />
              </MDBCol>
            </MDBRow>
          </Zoom>
          {/* <!-- Resume link drive --> */}
          <MDBContainer className='hstack justify-content-center p-5'>
            <Slide cascade direction='down'>
              <a
                href='https://drive.google.com/file/d/1TMNpAprkgN2g3WpmMtDLl5E9nXDZLBkP/view'
                className='btn btn-lg btn-rounded btn-dark'
                target='_blank'
                rel='noreferrer'>
                <MDBTypography tag={'span'}>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='download'
                    animate='bounce'
                    className='mb-0 me-2'
                  />
                  Resume
                </MDBTypography>
              </a>
            </Slide>
          </MDBContainer>

          {/* <!-- About me --> */}
          <MDBRow className='gx-0'>
            <MDBCol lg={8} className='m-auto'>
              <Fade delay={1e3} cascade damping={1e-1} triggerOnce>
                <MDBTypography tag={'p'} className='p-5 fs-5 txt'>
                  A lifetime Learner, Team Player,&nbsp;Hard Working with hands
                  on knowledge in demanding Full Stack Technologies such as
                  React.js,&nbsp;Node.js, Java, Python, Backend Technologies
                  Mongodb, Oracle, Node.js, DSA who wants to upgrade skills and
                  contribute to organization where my skills are recognized.
                </MDBTypography>
              </Fade>
            </MDBCol>
          </MDBRow>

          {/* <!-- Hidden items --> */}
          <MDBContainer className='hstack flex-wrap justify-content-center gap-3 gx-0 pb-5'>
            {/* <!-- Certificates --> */}
            <Slide cascade direction='left'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'
                onClick={toggleShowCertificate}>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='certificate'
                    animate='spin'
                  />
                </MDBTypography>
                Certificates
              </MDBBtn>
            </Slide>

            <CertificateModal
              certificateModal={certificateModal}
              setCertificateModal={setCertificateModal}
              toggleShowCertificate={toggleShowCertificate}
            />
            {/* <!-- Education --> */}
            <Slide cascade direction='up'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'
                onClick={toggleShowEducation}>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='graduation-cap'
                    animate='beat'
                  />
                </MDBTypography>
                Education
              </MDBBtn>
            </Slide>
            <EducationModal
              educationModal={educationModal}
              setEducationModal={setEducationModal}
              toggleShowEducation={toggleShowEducation}
            />
            {/* <!-- Achivements --> */}
            <Slide cascade direction='up'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'
                onClick={toggleShowAchivement}>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon fab iconType='solid' icon='award' animate='shake' />
                </MDBTypography>
                Achievements
              </MDBBtn>
            </Slide>
            <AchivementModal
              achivementModal={achivementModal}
              setAchivementModal={setAchivementModal}
              toggleShowAchivement={toggleShowAchivement}
            />

            {/* <!-- Interests --> */}
            <Slide cascade direction='right'>
              <MDBBtn
                tag='button'
                color='primary'
                rippleCentered
                rippleColor='secondary'
                rippleDuration={500}
                rippleRadius={85}
                rounded
                size='lg'>
                <MDBTypography tag={'span'} className='mb-0 me-2'>
                  <MDBIcon
                    fab
                    iconType='solid'
                    icon='wand-magic-sparkles'
                    animate='beat-fade'
                  />
                </MDBTypography>
                Interests
              </MDBBtn>
            </Slide>
          </MDBContainer>
        </MDBContainer>
      </section>
    </>
  );
};

export default About;
