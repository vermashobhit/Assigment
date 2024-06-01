import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import ToggleSwitch from './components/ToggleSwitch';
import Dashboard from './pages/Dashboard';
import ActiveSaleOrders from './components/ActiveSaleOrders';
import CompletedSaleOrders from './components/CompletedsaleOrders';
import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
//import AddSaleOrders from './components/AddSaleOrderModal';

function App() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    localStorage.setItem('chakra-ui-color-mode', colorMode);
  }, [colorMode]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
                <ChakraProvider>
                  <Tabs isFitted variant="enclosed">
                    <TabList mb="1em">
                      <Tab>Active Sale Orders</Tab>
                      <Tab>Completed Sale Orders</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <ActiveSaleOrders />
                      </TabPanel>
                      <TabPanel>
                        <CompletedSaleOrders />
                      </TabPanel>
                      {/* <TabPanel>
                        <AddSaleOrders/>
                      </TabPanel> */}
                    </TabPanels>
                  </Tabs>
                </ChakraProvider>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
