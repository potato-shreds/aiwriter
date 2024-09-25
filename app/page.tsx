'use client';

import React, { useState } from 'react';

import Header from '@/app//components/Header';
import Overview from '@/app/components/Overview';
import Companies from '@/app/components/Companies';
import Templates from '@/app/components/Templates/Templates';
import Reviews from '@/app/components/Reviews/Reviews';
import QueAndAns from '@/app/components/QueAndAns';
import QrCode from './components/QrCode';
import Footer from '@/app//components/Footer';
import Dialog from '@/app/components/Dialog';

const Home: React.FC = () => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  const showMore = () => {
    setIsShowDialog(true);
  };

  const closeDialog = () => {
    setIsShowDialog(false);
  };

  return (
    <div>
      <Header />
      <Overview />
      <Companies />
      <Templates showMore={showMore} />
      <Reviews />
      <QueAndAns />
      <QrCode />
      <Footer />
      {isShowDialog && <Dialog closeDialog={closeDialog} />}
    </div>
  );
};

export default Home;
