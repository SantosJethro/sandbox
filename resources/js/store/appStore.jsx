import { defaults, createStore, createSubscriber, createHook } from 'react-sweet-state';
defaults.batchUpdates = true;


const AppStore = createStore({
  initialState: {
    loader: false,

    drawerState: false,

    contentBoxHeight: 600,
    contentBoxWidth: 600,
    theme: 'light',
    
    userDetails: null,

    socket: null,

  },
  actions: {
    setContentBoxHeight: (newHeight = 600) => ({ setState }) => (
      setState({
        contentBoxHeight: newHeight
      })
    ),
    setContentBoxWidth: (newWidth) => ({ setState }) => (
      setState({
        contentBoxWidth: newWidth,        
      })
    ),
    setTheme: (theme) => ({ setState }) => (
      setState({
        theme: theme
      })
    ),

    setLoader: (state) => ({ setState }) => (
      setState({
        loader: state
      })
    ),
    
    showLoader: () => ({ setState }) => (
      setState({
        loader: true
      })
    ),

    hideLoader: () => ({ setState }) => (
      setState({
        loader: false
      })
    ),

    setDrawerStatus: (state) => ({ setState }) => (
      setState({
        drawerState: state
      })
    ),
    

    //userDetails
    setUserDetails: (details) => ({setState}) => (
      setState({
        userDetails: {...details}
      })
    ),
  },
});


//userInfo
export const getUserInfo = (state) => (state.userDetails);
export const useUserInfo = createHook(AppStore,{
  selector: getUserInfo
});



// AppStore info
const AppStoreSubscriber = createSubscriber(AppStore);
const useAppStore = createHook(AppStore);


// UI sizes
export const getUIStore = (state) => ({
  loader: state.loader,
  theme: state.theme,
  setContentBoxHeight: state.setContentBoxHeight,
  contentBoxHeight: state.contentBoxHeight,
  contentBoxWidth: state.contentBoxWidth,
  contentBoxWidthNoSidebar: state.contentBoxWidthNoSidebar,
  sidebarWidth: state.sidebarWidth,
});

export const useUIStore = createHook(AppStore, {
  selector: getUIStore,
});

export const UIStore = createSubscriber(AppStore, {
  selector: getUIStore,
  displayName: 'UISizing'
});


// Theme status
export const getTheme = (state) => (state.theme);

export const ThemeSubscriber = createSubscriber(AppStore, {
  selector: getTheme,
  displayName: 'ThemeSubscriber'
});

export const useTheme = createHook(AppStore, {
  selector: getTheme
});


export {
  AppStoreSubscriber,
  useAppStore,
};
