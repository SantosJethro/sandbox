import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import { Link } from 'react-router-dom';
import { AccountCircle, AdminPanelSettings, AssessmentOutlined, FileDownload, Group, GroupAdd, Groups, MarkAsUnread, Person, PersonAddAlt, Receipt, Security, SystemUpdate, ViewList, Widgets } from '@mui/icons-material';
import { useUserInfo } from '../../../store/appStore';

const useStyles = makeStyles((theme) =>
  ({
    button: {
      '&:hover': {
        backgroundColor: theme.palette.mode == 'dark' ? '#f5f5f5 !important' : '#000 !important',
        color: theme.palette.mode == 'dark' ? '#000' : '#fff'
      },
      borderRadius: '25px !important',
      paddingBottom: '2px !important'
    },
    navIcon: {
      marginLeft: '0.3rem',
      minWidth: '39px !important  ',
      minHeight: '30',
      color: '#e81934 !important',
    },
    navTitle: {
      fontSize: '12px',
      textOverflow: 'clip',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      minHeight: '30',
    }
  })
);

const pages = [
  { permission: 'view_dashboard', path: '/', title: 'Dashboard', icon: <MarkChatUnreadIcon /> },
  { permission: 'view_canned_messages', path: '/canned', title: 'Canned', icon: <StickyNote2Icon /> },
  { permission: 'view_qa_unread_sessions', path: '/qa-unread', title: 'QA Unread', icon: <MarkAsUnread /> },
  { permission: 'view_operators', path: '/operators', title: 'Operators', icon: <AccountCircle /> },
  { permission: 'view_operator_services', path: '/operators-assign', title: 'Assign Operator', icon: <PersonAddAlt /> },
  { permission: 'view_personas', path: '/personas', title: 'Personas', icon: <GroupAdd /> },
  { permission: 'view_admin', path: '/admins', title: 'Admins', icon: <Groups /> },
  { permission: 'view_clients', path: '/clients', title: 'Clients', icon: <ViewList /> },
  { permission: 'view_widgets', path: '/widgets/list', title: 'Widgets List', icon: <Widgets /> },
  { permission: 'view_widget_creation', path: '/widgets/create', title: 'Widgets Creation', icon: <Widgets /> },
  { permission: 'view_session_reports', path: '/session-report', title: 'Session Report', icon: <AssessmentOutlined /> },
  { permission: 'view_operator_reports', path: '/operator-report', title: 'Operator Report', icon: <Receipt /> },
  { permission: 'view_export_reports', path: '/export-report', title: 'Export Report', icon: <FileDownload /> },
  { permission: 'view_permissions', path: '/permission', title: 'Permission', icon: <Security /> },
];

const SidebarList = (props) => {
  const classes = useStyles();
  const { permissions } = props;
  return (
    <Fragment>
      <List sx={{ padding: '0px' }}>
        {
          pages.map((page, idx) => {
            if (permissions.includes(page.permission)) {
              return (
                <ListItem
                  key={idx}
                  button
                  component={Link}
                  to={page.path}
                  classes={{
                    button: classes.button,
                  }}
                >
                  <ListItemIcon className={classes.navIcon}>
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText className={classes.navTitle} primary={page.title} />
                </ListItem>
              );
            }
          })
        }
      </List>
    </Fragment>
  );
};

export default SidebarList;