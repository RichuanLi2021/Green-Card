import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
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
import FeedbackAdminPage from './AdminFeedBackPage';
import Customer from './Customer';

/* const theme = createTheme({
    palette: {
        primary: {
            main: '#96d2b0'
        }
    }
}); */

const drawerWidth = 220;

export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          top: 0,
          bottom: 0,
          zIndex: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "64px",
            position: "absolute",
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Overview', 'Users', 'Feedback', 'Data tables'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={() => handleItemClick(text)}>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 ? <GridViewIcon /> : index === 1 ? <GroupIcon/> : index === 2 ? <FeedbackIcon/> : <TableChartIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Account', 'Settings'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={() => handleItemClick(text)}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <AccountCircleIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ p: 3, position: 'fixed', marginLeft: '250px' }}>
        {selectedItem && (
          <>
            <Toolbar />
            {renderComponentForSelectedItem(selectedItem)}
          </>
        )}
      </Box>
    </Box>
  );
}

function renderComponentForSelectedItem(item) {
  switch (item) {
    case 'Overview':
      return <box><Typography>Overview to be updated!</Typography></box>
    case 'Users':
      return <Customer />;
    case 'Feedback':
      return <FeedbackAdminPage />;
    case 'Data tables':
      return <box><Typography>Data tables view to be updated!</Typography></box>
    case 'Account':
      return <box><Typography>Account view to be updated!</Typography></box>
    case 'Settings':
      return <box><Typography>Settings view o be updated!</Typography></box>
    default:
      return null;
  }
}
