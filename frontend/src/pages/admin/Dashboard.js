import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TableChartIcon from '@mui/icons-material/TableChart';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackPage from './Feedback';
import Customer from './Customer';
import OverviewDashboard from './OverviewDashboard';
import DataTables from './DataTables';
import Accounts from './Accounts';
import "./Dashboard.css";
import { useLocation } from "react-router-dom";


/* const theme = createTheme({
    palette: {
        primary: {
            main: '#96d2b0'
        }
    }
}); */


export default function Dashboard() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.state?.selectedItem || null);

  useEffect(() => {
    setSelectedItem(location.state?.selectedItem);
  }, [location]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Box sx={{ display: 'flex', width: 'auto' }}>
      <Drawer
        variant="permanent"
        className='sidebar'
        
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Overview', 'Users', 'Feedback', 'Data tables'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={() => handleItemClick(text)}>
                <ListItemButton sx={{ width: 'auto' }}>
                  <ListItemIcon>
                    {index === 0 ? <GridViewIcon /> : index === 1 ? <GroupIcon/> : index === 2 ? <FeedbackIcon/> : <TableChartIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} className="sidebar-text" sx={{ display: { xs: 'none', sm: 'initial' } }} />                
                  </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Account', 'Settings'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={() => handleItemClick(text)}>
                <ListItemButton sx={{ width: 'auto' }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <AccountCircleIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} className="sidebar-text" sx={{ display: { xs: 'none', sm: 'initial' } }} />                
                  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box className="admin-root-container">
        {selectedItem && (
          <>
            {renderComponentForSelectedItem(selectedItem)}
          </>
        )}
        {!selectedItem && (
          <>
            <OverviewDashboard/>
          </>
        )}
      </Box>
    </Box>
  );
}

function renderComponentForSelectedItem(item) {
  switch (item) {
    case 'Overview':
      return <OverviewDashboard/>;
    case 'Users':
      return <Customer />;
    case 'Feedback':
      return <FeedbackPage />;
    case 'Data tables':
      return <DataTables />;
    case 'Account':
      return <Accounts />;
    case 'Settings':
      return <box><Typography style={{margin:'1em'}}>Settings view to be updated!</Typography></box>
    default:
      return null;
  }
}
