import React, { useState } from 'react';

import { getMedia } from '../helpers';
import { Modal } from './Modal';

const work = [
  {
    url: getMedia('trolliTile'),
    centered: true,
    title: "Clients: Trolli & 7 Eleven",
    description: `The "Show Us Your Package" pop up event in Times Square involved a lot more tech than met the eye. There was user registration via iPad's on site, a professional photographer with a camera tethered to the server for image processing, real time image processing and approvals, and real time syncing with a live site being displayed on 2 of the major digital billboards for the users to see themselves.`,
    techStack: "React-Native(Registration), React(Billboard Site and Processing), Nodejs(Image Processing and Camera Tethering), AWS(Analytics and Image Storage)"
  },
  {
    url: getMedia('smirnoffTile'),
    centered: true,
    title: "Client: Smirnoff",
    description: `The "Smirnoff House" appeared at multiple venues and events creating a fun and interactive atmosphere. The house included a real time CMS system for displaying digital content on screens disguised as old tube televisions, picture frames, and more. The green screen photo booth was also a major attraction for users to get a fun take away from the event.`,
    techStack: "Angular(CMS and Admin controls), Nodejs(Server for live updates, image processing, and upload/email)"
  },
  {
    url: getMedia('schwansTile'),
    centered: true,
    title: "Client: Schwans",
    description: `The "Tailgate Trivia" trucks appeared the Super Bowl Live outdoor event during Super Bowl LII in Minneapolis, Minnesota. The event included user registration, live trivia with up to 4 competitors at a time playing on a screen that was roughly 5 stories tall, and the emcee having control over the game via an iPad.`,
    techStack: "React(Trivia Game Screen and Admin), React-Native(Registration and Bobblehead Gif creation), Electron(Podium screens for user answers with arcade buttons), Nodejs(Server to handle real time responses and upload to the cloud), , AWS(Analytics, Gif Processing, Image and Data Storage)"
  },
  {
    url: getMedia('citiTile'),
    title: "Client: Citi Bank",
    description: `The "JOYTM" ballpit popup event in Times Square was a way to spread joy and create a fun break in peoples day. The JOYTM's dispensed tickets with various prizes on them with special golden tickets having the best prizes of the day.`,
    techStack: "React/Electron(JOYTM screens and controlling the ticket printer)"
  },
  {
    url: getMedia('nhlTile'),
    centered: true,
    title: "Client: NHL",
    description: `The "NHL Centennial Fan Arena" celebrated the 100th year of NHL Hockey. The event included a museum truck that had various digital aspects like synced video content, interactive applications covering the history of each team and the NHL trophies, and an interactive lockerroom photo op to make you a part of the team.`,
    techStack: "Angular(Interactive applications), Electron(Video players and photo booth controls), React-Native(Registration and Photo booth sign up)"
  },
  {
    url: getMedia('netflixTile'),
    centered: true,
    title: "Client: Netflix",
    description: `The "Netflix FYSEE" event included various sections covering several different original shows. The digital content for the event included an interactive wrestler avatar screen, retro juke box turned video player, and CMS for event information with real time updates.`,
    techStack: "React(CMS and Admin control screens), React-Native(Local controls), Electron(Jukebox video player), AWS(Analytics and CMS data management)"
  },
  {
    url: getMedia('intelTile'),
    centered: true,
    title: "Client: Intel",
    description: `The "Intel 5G" event included a look at a room/house of the future with multiple connected devices like a digital fish tank, led lights, and big screen television that was all voice controlled.`,
    techStack: "React(Admin control screens), Electron(Fish tank and Big screen content), Amazon Alexa API(Voice control)"
  },
  {
    url: getMedia('crownroyalTile'),
    title: "Client: Crown Royal",
    description: `The "Change Machine" photo booths created double exposure photos of users turning them purple and gold and printing them out for a nice take away, allowed users to record videos about what "Change" means to them, and allowed them to donate to local charities based on the actual cities that they were located.`,
    techStack: "React(Admin screens), Swift(Photo booth), AWS(Image Storage and Analytics)"
  }
]

export const MyWork = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>({});

  const openModal = (modalData: any) => {
    console.log(modalData)
    setModalData(modalData);
    setTimeout(() => {
      setModalOpen(true);
    }, 50);
  }

  return (
    <>
      <section className="section-dark my-work" id="work">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div className="column is-12">
              <h1 className="title has-text-centered section-title">My Work</h1>
            </div>
            {work.map(w => (
              <div className="column is-3">
                <a onClick={() => openModal(w)}>
                  <figure
                    className="image is-2by1 work-item"
                    style={{
                      backgroundImage: `url(${w.url})`,
                      ...(w.centered ? { backgroundPosition: 'center' } : {})
                    }}
                  ></figure>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal open={modalOpen} close={() => setModalOpen(false)} info={modalData} />
    </>
)}
