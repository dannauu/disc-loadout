'use client'
import React from 'react'
import styles from './page.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Database from './database'


const BagBuilder = () => {
    const [selectedManufacturer, setSelectedManufacturer] = React.useState<string | null>('');
    const allManufacturers = [
        ...new Set(Database.map((disc) => disc.Manufacturer).filter(Boolean))
    ].sort();

    React.useEffect(() => {
    }, [selectedManufacturer]);

    // Filter disc models based on selected manufacturer
    const discModels = React.useMemo(() => {
        if (!selectedManufacturer) return [];
        return Database
            .filter(disc => disc.Manufacturer === selectedManufacturer)
            .map(disc => disc["Disc Model"])
            .sort();
    }, [selectedManufacturer]);

    return (
        <div className="main">
            <p>
                User uploads all discs they own or willing to throw and then they can create a bag with those discs they uploaded or chose. Ask questions, left or right handed, forehand or backend, skill level?
            </p>
            <div className={styles.gridWrapper}>
                <div className={styles.gridItem}>
                    <div>
                        <label htmlFor="">How long have you been playing disc golf?</label>
                        <Autocomplete
                            disablePortal
                            options={['Less than a year', '1-3 years', '3-5 years', '5-10 years', '10+ years']}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField  {...params} label="Skill level" variant="standard" />}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Choose a disc manufacturer:</label>
                        <Autocomplete
                            disablePortal
                            options={allManufacturers}
                            value={selectedManufacturer}
                            onChange={(event: any, newValue: string | null) => {
                                setSelectedManufacturer(newValue);
                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Disc Manufacturer" variant="standard" />
                            )}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Choose a disc mold:</label>
                        <Autocomplete
                            disablePortal
                            options={discModels}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Disc Mold" variant="standard" />
                            )}
                        />
                    </div>
                </div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
                <div className={styles.gridItem}></div>
            </div>
        </div>
    )
}

export default BagBuilder