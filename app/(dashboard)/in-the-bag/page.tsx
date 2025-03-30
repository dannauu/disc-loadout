import { Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css';
import Button from '@mui/material/Button';
import BackpackIcon from '@mui/icons-material/Backpack';

const InTheBag = () => {
  return (
    <div className='main'>
      <Typography>InTheBag</Typography>

      <div className={styles.gridWrapper}>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InTheBag