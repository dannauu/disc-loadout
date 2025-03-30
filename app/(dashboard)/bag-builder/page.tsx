'use client'
import React from 'react'
import styles from './page.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import discBrands from './discBrands';


const BagBuilder = () => {
    return (
        <div className="main">
            <p>
                Welcome to the Bag Builder page! Here you can customize your bag by adding items, removing items, and viewing your current selections.   Use the options available to create the perfect bag for your needs.
            </p>
            <div className={styles.gridWrapper}>
                <div className={styles.gridItem}>
                    <label htmlFor="">Choose a disc manufacturer</label>
                    <Autocomplete
                        disablePortal
                        options={discBrands}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField  {...params} label="Disc Manufacturer" variant="standard" />}
                    />
                    <Autocomplete
                        disablePortal
                        options={discBrands}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField  {...params} label="Disc Mold" variant="standard" />}
                    />
                </div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
            </div>
        </div>
    )
}

export default BagBuilder