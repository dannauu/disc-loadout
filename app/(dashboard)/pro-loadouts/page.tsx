import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css';
import Button from '@mui/material/Button';
import BackpackIcon from '@mui/icons-material/Backpack';

const ProLoadouts = () => {
  return (
    <div className='main'>

      <div className={styles.gridWrapper}>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy&apos;s Loadout</h2>
            <Link href="/in-the-bag/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Gannon Buhr - Discmania' src="/images/pro-pics/gannon-buhr.webp" width={1024} height={576} />
          <div>
            <h2>Check out Gannon&apos;s Loadout</h2>
            <Link href="/in-the-bag/pros/gannon-buhr"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy&apos;s Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy&apos;s Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy&apos;s Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
        <div className={styles.gridItem}>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy&apos;s Loadout</h2>
            <Link href="/pros/jeremy-koling"><Button variant="outlined">View Loadout <BackpackIcon/> </Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProLoadouts