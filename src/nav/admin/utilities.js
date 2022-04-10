/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { Timeline, LocationCity, Work, Settings, ManageAccounts, SupervisorAccount } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

// components
import NavItem from '../../components/nav/nav-item';
import AddEditRevisionYear from '../../components/general-revision/revision-year/add-edit-revision-year';
import RevisionYearTable from '../../components/general-revision/revision-year/revision-year-table';

// redux
import {
    fetchRevisionYearRedux,
    storeRevisionYearRedux,
    deleteRevisionYearRedux
} from '../../redux/revision-year/action';

const UtilitiesNav = ({ open }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    // global state
    const revisionYearList = useSelector(state => state.revisionYearData.revisionYears);

    //local state
    const [expand, setExpand] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [yearList, setYearList] = useState([]);
    const [selected, setSelected] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const generateArrayOfYears = () => {
        let max = new Date().getFullYear()
        let min = max - 22
        let years = []

        for (let i = max; i >= min; i--) {
            years.push({ "year": i })
        }
        return years
    }

    useEffect(() => {
        setYearList(generateArrayOfYears())
        dispatch(fetchRevisionYearRedux());
    }, [dispatch])

    const addYear = async (_data) => {
        const payload = {
            revision_year: _data.revisionYear,
        }
        await dispatch(storeRevisionYearRedux(payload));
    }

    const deleteYear = async (id) => {
        await dispatch(deleteRevisionYearRedux(id))
    }

    const currentLocation = location.pathname.toLocaleLowerCase();
    const checkCurrentLocation = useCallback(() => {
        if (currentLocation.includes('utilities')) {
            setExpand(!expand);
        }
    }, []);

    useEffect(() => {
        checkCurrentLocation();
    }, [])

    return (
        <div>
            <ListItemButton onClick={() => { setExpand(!expand) }}>
                <ListItemIcon
                    style={{
                        color: currentLocation.includes('utilities') ? '#66B2FF' : 'white',
                        fontWeight: 'bold',
                        fontSize: 50
                    }}
                >
                    <Settings />
                </ListItemIcon>
                <p
                    style={{
                        color: currentLocation.includes('utilities') ? '#66B2FF' : 'white',
                        fontWeight: 'bolder',
                        fontSize: 15,
                        fontFamily: 'revert',
                        marginTop: 0,
                        marginBottom: 0,
                        width: '100%'
                    }}>
                    Utilities
                </p>
                {expand ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{ marginLeft: open ? 30 : -15, color: 'white' }}>
                    <NavItem
                        link={'utilities/municipality-city'}
                        icon={<LocationCity style={{ color: 'white' }} />}
                        title={'Municipality/City'}
                    />
                    <NavItem
                        link={'utilities/personnels'}
                        icon={<SupervisorAccount style={{ color: 'white' }} />}
                        title={'Personnels'}
                    />
                    <NavItem
                        link={'utilities/accounts'}
                        icon={<ManageAccounts style={{ color: 'white' }} />}
                        title={'Accounts'}
                    />
                    <NavItem
                        link={'utilities/job-position'}
                        icon={<Work style={{ color: 'white' }} />}
                        title={'Job position'}
                    />
                    <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => { setShowModal(!showModal) }}>
                        <ListItemIcon>
                            <Timeline style={{ color: 'white' }} />
                        </ListItemIcon>

                        <p
                            style={{
                                fontWeight: 'bolder',
                                textAlign: 'center',
                                justifyContent: 'center',
                                fontSize: 15,
                                fontFamily: 'revert',
                                marginTop: 0,
                                marginBottom: 0
                            }}
                        >
                            Revision Year
                        </p>

                    </ListItemButton>
                </List>
            </Collapse>

            <Modal
                isOpen={showModal}
                onRequestClose={() => {
                    setShowModal(!showModal)
                }}
                contentLabel="Example Modal"
                onClose={() => {
                    setShowModal(!showModal)
                }}
                ariaHideApp={false}
                style={{
                    content: {
                        top: '50%',
                        marginLeft: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '35%',
                        height: '65%'
                    },
                    overlay: {
                        zIndex: 10
                    }
                }}
            >


                <AddEditRevisionYear
                    addYear={addYear}
                    yearList={yearList}
                    revisionYearList={revisionYearList}
                />
                <RevisionYearTable
                    deleteYear={deleteYear}
                    revisionYearList={revisionYearList}
                    setSelected={setSelected}
                    setSelectedYear={setSelectedYear}
                />
            </Modal>
        </div>
    );

}

export default UtilitiesNav;