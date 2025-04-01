'use client'
import React from 'react'
import styles from './page.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const BagBuilder = () => {
    const [selectedManufacturer, setSelectedManufacturer] = React.useState<string | null>('');
    const [allBrands, setAllBrands] = React.useState<string[]>([]);
    const [discMolds, setDiscMolds] = React.useState<string[]>([]);


    // Extract  manufacturers from the database
    React.useEffect(() => {
        const fetchBrands = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/brands');
                const data = await res.json();
                setAllBrands(data);
            } catch (err) {
                console.error('Failed to load brands', err);
            }
        };

        fetchBrands();
    }, []);

    React.useEffect(() => {
        const fetchDiscsByBrand = async () => {
            if (!selectedManufacturer) return;

            try {
                const res = await fetch(`http://localhost:5000/api/brands/${encodeURIComponent(selectedManufacturer)}`);
                const data = await res.json();

                // Extract unique disc names/molds
                const molds = data.map((disc: any) => disc.name);
                setDiscMolds(molds);
            } catch (err) {
                console.error('Failed to fetch discs for brand', err);
            }
        };

        fetchDiscsByBrand();
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
                            options={allBrands}
                            onChange={(event, value) => setSelectedManufacturer(value)}
                            value={selectedManufacturer}
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
                            options={discMolds}
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