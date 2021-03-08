import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Drawer from '@material-ui/core/Drawer';
import Settings from '@material-ui/icons/Settings';
import Play from '@material-ui/icons/PlayArrow';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@material-ui/core/CircularProgress';

// List
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// Dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

// Components.
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestList from '../components/TestList';
import Summary from '../components/Summary';
import TestResult from '../components/TestResult';
import Result from '../components/Result';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 600,
  },
  paper: {
    height: 500,
    width: 100,
  },
  drawer: {
    width: 350,
  },
  // Styles for the `Paper` component rendered by `Drawer`.
  drawerPaper: {
    width: 'inherit',
    paddingTop: 64, // Equal to AppBar height.
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingTop: theme.spacing(15),
  },
  rightIcons: {
    marginRight: '-12px',
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
  authStyle: {
    //  paddingTop: 15,
    // paddingLeft: 9,
    // paddingBottom: 15,
    padding: 5,
    display: 'flex',
    width: '97%',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.spacing(1),
    width: 200,
    textTransform: 'none',
  },
  centerCol: {
    flex: 1,
    overflowY: 'scroll',
    height: 550,
  },
  dialogPaper: {
    minHeight: '50vh',
    maxHeight: '50vh',
    minWidth: '60vh',
    maxWidth: '60vh',
  },
}));

const testCases = [
  'ServiceProvider Config',
  'Schemas',
  'ResourceTypes',
  'User Endpoint',
  'Group Endpoint',
  'Me Endpoint',
  'Bulk Endpoint',
  'Roles Endpoint',
];

const serviceProviderConfigSubTests = [
  { name: 'GET /ServiceProviderConfig', stateName: 'serviceProviderConfigGet' },
];

const schemasSubTests = [{ name: 'GET /Schemas', stateName: 'schemasGet' }];

const resourceTypesSubTests = [
  { name: 'GET /ResourceTypes', stateName: 'resourceTypesGet' },
];

const userSubTests = [
  { name: 'GET /Users', stateName: 'userGet' },
  { name: 'GET /Users/{id}', stateName: 'userGetById' },
  { name: 'POST /Users', stateName: 'userPost' },
  { name: 'PUT /Users', stateName: 'userPut' },
  { name: 'PATCH /Users', stateName: 'userPatch' },
  { name: 'DELETE /Users', stateName: 'userDelete' },
  { name: 'POST /Users/.search', stateName: 'userSearch' },
];

const groupSubTests = [
  { name: 'GET /Groups', stateName: 'groupGet' },
  { name: 'GET /Groups/{id}', stateName: 'groupGetById' },
  { name: 'POST /Groups', stateName: 'groupPost' },
  { name: 'PUT /Groups', stateName: 'groupPut' },
  { name: 'PATCH /Groups', stateName: 'groupPatch' },
  { name: 'DELETE /Groups', stateName: 'groupDelete' },
  { name: 'POST /Groups/.search', stateName: 'groupSearch' },
];

const meSubTests = [
  { name: 'GET /Me', stateName: 'meGet' },
  { name: 'POST /Me', stateName: 'mePost' },
  { name: 'PUT /Me', stateName: 'mePut' },
  { name: 'PATCH /Me', stateName: 'mePatch' },
  { name: 'DELETE /Me', stateName: 'meDelete' },
];

const bulkSubTests = [
  { name: 'POST /Bulk', stateName: 'bulkPost' },
  { name: 'PUT /Bulk', stateName: 'bulkPut' },
  { name: 'PATCH /Bulk', stateName: 'bulkPatch' },
  { name: 'DELETE /Bulk', stateName: 'bulkDelete' },
];

const rolesSubTests = [
  { name: 'GET /Roles', stateName: 'rolesGet' },
  { name: 'GET /Roles/{id}', stateName: 'rolesGetById' },
  { name: 'POST /Roles', stateName: 'rolesPost' },
  { name: 'PUT /Roles', stateName: 'rolesPut' },
  { name: 'PATCH /Roles', stateName: 'rolesPatch' },
  { name: 'DELETE /Roles', stateName: 'rolesDelete' },
  { name: 'POST /Roles/.search', stateName: 'rolesSearch' },
];

const tests = [
  {
    id: 1,
    name: '/ServiceProviderConfig',
    sub: serviceProviderConfigSubTests,
  },
  {
    id: 2,
    name: '/Schemas',
    sub: schemasSubTests,
  },
  {
    id: 3,
    name: '/ResourceTypes',
    sub: resourceTypesSubTests,
  },
  {
    id: 4,
    name: '/Users',
    sub: userSubTests,
  },
  {
    id: 5,
    name: '/Groups',
    sub: groupSubTests,
  },
  {
    id: 6,
    name: '/Me',
    sub: meSubTests,
  },
  {
    id: 7,
    name: '/Bulk',
    sub: bulkSubTests,
  },
  {
    id: 8,
    name: '/Roles',
    sub: rolesSubTests,
  },
];

export default function Home() {
  const classes = useStyles();
  const [testCases, setTestcases] = React.useState(tests);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState(false);
  const [formData, setFormData] = React.useState({
    endpoint: 'https://localhost:9443/scim2',
    userName: '',
    password: '',
    token: '',
  });
  const [type, setType] = React.useState(1);
  const [errors, setErrors] = React.useState({
    endpoint: '',
    userName: '',
    password: '',
    token: '',
    general: '',
  });
  const [statistics, setStatistics] = React.useState();
  const [results, setResults] = React.useState();
  const [resultData, setResultData] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [state, setState] = React.useState({
    userGet: false,
    userGetById: false,
    userPut: false,
    userPost: false,
    userPatch: false,
    userSearch: false,
    userDelete: false,
  });

  const notify = (message) => {
    toast(message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      type: 'Error',
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTypeChange = (event) => {
    setType(Number(event.target.value));
    console.log(type);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    if (formData.endpoint == '') {
      setErrors({
        ...errors,
        endpoint: 'Fill endpoint details',
      });
      return;
    }

    if (type == 1 && (formData.userName == '' || formData.password == '')) {
      if (formData.password == '' && formData.userName == '') {
        setErrors({
          ...errors,
          userName: 'Fill userName',
          password: 'Fill password',
        });
      } else if (formData.password == '') {
        setErrors({
          ...errors,
          password: 'Fill endpoint details',
        });
      } else if (formData.userName == '') {
        setErrors({
          ...errors,
          userName: 'Fill userName',
        });
      } else {
        setErrors({
          ...errors,
          userName: '',
          password: '',
        });
      }
      return;
    } else if (type == 2 && formData.token == '') {
      setErrors({
        ...errors,
        token: 'Fill token details',
      });
      return;
    }
    setErrors({
      ...errors,
      userName: '',
      password: '',
      endpoint: '',
      token: '',
    });

    handleClose();
  };

  const handleCheckbox = (parentId, parentIndex, childId, childIndex) => {
    const tests = testCases;
    const test = tests[parentIndex];
    const features = test.sub;
    const allChildrenSelected = test || false;
    console.log(features);

    if (typeof childIndex !== 'undefined' || typeof childId !== 'undefined') {
      // [SCENARIO] - a child checkbox was selected.
      console.log('child clicked: ', childIndex);

      // get total of checked sub checkboxes in existing array
      let checkedCount = 0;
      features.forEach((feature) => feature.checked && checkedCount++);

      if (!features[childIndex].checked) {
        // [SCENARIO] - previous state of child was 'FALSE'
        console.log('in child function, previous state is false');
        // [TASK] - set the child to selected
        const modifiedFeature = {
          ...features[childIndex],
          checked: true,
        };

        // [TASK] - insert modified child back into parent
        features[childIndex] = modifiedFeature;
        const modifiedFeatures = features;

        // [TASK] - check if parent is selected (is this the first child to be selected)
        if (checkedCount === 0) {
          const modifiedtest = {
            ...test,
            checked: true,
            sub: modifiedFeatures,
          };
          // insert the test back into the list
          tests[parentIndex] = modifiedtest;
          const modifiedtests = tests;

          setTestcases([...modifiedtests]);
        } else {
          // non-first child checkbox being selected
          const modifiedtest = {
            ...test,
            sub: modifiedFeatures,
          };
          // insert the test back into the list
          tests[parentIndex] = modifiedtest;
          const modifiedtests = tests;

          setTestcases([...modifiedtests]);
        }
      } else {
        // [SCENARIO] - previous state of child was 'TRUE'
        console.log('in child function, previous state is true');
        // [TASK] - deselect the child checkbox
        const modifiedFeature = {
          ...features[childIndex],
          checked: false,
        };

        // [TASK] - insert modified child back into parent
        features[childIndex] = modifiedFeature;
        const modifiedFeatures = features;

        if (checkedCount === 1) {
          // [SCENARIO] - deselecting the last child checkbox
          const modifiedtest = {
            ...test,
            checked: false,
            expanded: false,
            allChildrenSelected: false,
            sub: modifiedFeatures,
          };
          // insert the test back into the list
          tests[parentIndex] = modifiedtest;
          const modifiedtests = tests;

          setTestcases([...modifiedtests]);
        } else {
          console.log('in here');
          // [SCENARIO] - just deselecting a non-first child checkbox
          const modifiedtest = {
            ...test,
            allChildrenSelected: false,
            sub: modifiedFeatures,
          };
          // insert the test back into the list
          tests[parentIndex] = modifiedtest;
          const modifiedtests = tests;

          setTestcases([...modifiedtests]);
        }
      }
    } else {
      // [SCENARIO] - a parent checkbox was selected.
      console.log('parent clicked: ', parentIndex);
      if (!test.checked) {
        // [SCENARIO] - previous state of parent was 'FALSE'

        // [TASK] - select all features
        const modifiedFeatures = features.map((feature) => ({
          ...feature,
          checked: !feature.checked,
        }));

        // [TASK] - set modified test
        const modifiedtest = {
          ...test,
          checked: true,
          expanded: true,
          allChildrenSelected: true,

          sub: modifiedFeatures,
        };

        // [TASK] - put the test back in the list of tests
        tests[parentIndex] = modifiedtest;
        const modifiedtests = tests;

        // [TASK] - set state of overall list
        setTestcases([...modifiedtests]);
      } else {
        // [SCENARIO] - previous state of parent was 'TRUE'

        if (allChildrenSelected) {
          // [SCENARIO] - all children checkboxs selected. deselect and close expansion
          console.log('all children are currently selected');
          // [TASK] - deselect all features
          const modifiedFeatures = features.map((feature) => ({
            ...feature,
            checked: false,
          }));

          // [TASK] - set modified test
          const modifiedtest = {
            ...test,
            checked: false,
            expanded: false,
            allChildrenSelected: false,

            sub: modifiedFeatures,
          };

          // [TASK] - put the test back in the list of tests
          tests[parentIndex] = modifiedtest;
          const modifiedtests = tests;

          // [TASK] - set state of overall list
          setTestcases([...modifiedtests]);
        } else {
          // [SCENARIO] - not all children are selected.

          // [TASK] - select all remaining children checkboxs
          // TODO - way to skip already true ones?
          const modifiedFeatures = features.map((feature) => ({
            ...feature,
            checked: true,
          }));

          // [TASK] - set modified test
          const modifiedtest = {
            ...test,
            allChildrenSelected: true,
            expanded: true,

            sub: modifiedFeatures,
          };

          // [TASK] - put the test back in the list of tests
          tests[parentIndex] = modifiedtest;
          const modifiedtests = tests;

          // [TASK] - set state of overall list
          setTestcases([...modifiedtests]);
        }
      }
    }
  };

  // const handlePrimaryChange = (event) => {
  //   console.log(event.target.name);
  //   if (event.target.name == 'User Endpoint') {
  //     //handleClick();
  //     setState({
  //       ...state,
  //       userGet: event.target.checked,
  //       userGetById: event.target.checked,
  //     });
  //   }
  // };

  // const handlePrimaryChange = (id, index) => {
  //   const test = testCases[index];
  //   const { subTests } = test.sub;

  //   var t = {
  //     ...testCases.filter((test) => test.id == id)[0],
  //     Checked: !testCases.filter((test) => test.id == id)[0].Checked,
  //     expanded: !testCases.filter((test) => test.id == id)[0].expanded,
  //   };
  //   if (t.checked == true) {
  //     t.sub.map((s) => (s.checked = true));
  //   } else {
  //     t.sub.map((s) => (s.checked = false));
  //   }
  //   const tests = testCases;
  //   tests[index] = t;

  //   setTestcases(tests);
  //   console.log(testCases);
  // };

  const handleClick = (id, index) => {
    console.log(testCases);
    var x = Array.from(testCases).filter((test) => test.id == id)[0];

    var t = {
      ...testCases.filter((test) => test.id == id)[0],
      expanded: !testCases.filter((test) => test.id == id)[0].expanded,
    };
    const tests = testCases;
    tests[index] = t;

    setTestcases([...tests]);
  };

  // const handleSecondaryChange = (event) => {
  //   console.log(state);
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  const selectAllTests = () => {
    var i;
    for (i = 0; i < testCases.length; i++) {
      handleCheckbox(i + 1, i);
    }
    setSelect(!select);
  };

  const runAllTests = () => {
    if (
      formData.endpoint == '' ||
      formData.userName == '' ||
      formData.password == ''
    ) {
      toast.error('Please fill all authentication details!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    var checkedCount = 0;
    testCases.map((t) => {
      if (t.checked == true) checkedCount++;
    });

    if (checkedCount == 0) {
      console.log(checkedCount);
      toast.error('Please check at least one test case to proceed!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    const data = {
      endpoint: formData.endpoint,
      userName: formData.userName,
      password: formData.password,
      testCases: testCases,
    };

    console.log(data);
    setLoading(true);
    axios
      .post('https://localhost:9443/moi-captcha/CaptchaServlet', data)
      .then((res) => {
        console.log(res);
        setStatistics(res.data.statistics);
        setResults(res.data.results);
        setResultData(true);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.root}>
      <Header className="App-header" />
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <div className={classes.authStyle}>
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              Authentication
            </Typography>
            <Settings onClick={handleClickOpen} />

            <Dialog
              classes={{ paper: classes.dialogPaper }}
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Authentication</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  To Execute tests please provide below details.
                </DialogContentText>
                <TextField
                  //autoFocus
                  name="endpoint"
                  margin="dense"
                  id="endpoint"
                  label="Endpoint"
                  type="url"
                  variant="outlined"
                  placeholder="https://localhost:9443/scim2"
                  fullWidth
                  onChange={handleChange}
                  value={formData.endpoint}
                  error={errors.endpoint ? true : false}
                  helperText={errors.endpoint}
                />
                <div style={{ paddingTop: 5 }}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Type
                    </InputLabel>
                    <Select
                      native
                      value={type}
                      onChange={handleTypeChange}
                      label="Type"
                    >
                      <option value={1}>Basic Auth</option>
                      <option value={2}>Bearer Token</option>
                    </Select>
                  </FormControl>
                </div>
                {type === 1 ? (
                  <div>
                    {' '}
                    <TextField
                      name="userName"
                      margin="dense"
                      id="userName"
                      label="Username"
                      type="text"
                      variant="outlined"
                      placeholder="enter your username"
                      fullWidth
                      onChange={handleChange}
                      value={formData.userName}
                      error={errors.userName ? true : false}
                      helperText={errors.userName}
                    />
                    <TextField
                      name="password"
                      margin="dense"
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      placeholder="enter your password"
                      fullWidth
                      onChange={handleChange}
                      value={formData.password}
                      error={errors.password ? true : false}
                      helperText={errors.password}
                    />
                  </div>
                ) : (
                  <div>
                    {' '}
                    <TextField
                      name="token"
                      margin="dense"
                      id="token"
                      label="Token"
                      type="text"
                      variant="outlined"
                      placeholder="enter your token"
                      fullWidth
                      onChange={handleChange}
                      value={formData.token}
                      error={errors.token ? true : false}
                      helperText={errors.token}
                    />
                  </div>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Divider />
          <div style={{ padding: 5 }}>
            <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
              Test Cases
            </Typography>
          </div>
          <Divider />
          <div className={classes.centerCol}>
            <List component="nav">
              <Checkbox
                disableRipple
                //edge="start"
                checked={select}
                onChange={selectAllTests}
                style={{
                  marginLeft: 4,
                }}
              />
              {testCases.map((t, parentIndex) => (
                <div>
                  <Divider />
                  <ListItem dense key={t.id}>
                    <ListItemIcon>
                      <Checkbox
                        disableRipple
                        edge="start"
                        checked={!!t.checked}
                        onChange={() => handleCheckbox(t.id, parentIndex)}
                        name={t.name}
                      />
                    </ListItemIcon>
                    <ListItemIcon>
                      <Button
                        disableFocusRipple
                        disableRipple
                        classes={{ outlined: classes.button }}
                        variant="outlined"
                        //  size="small"
                      >
                        <Typography
                          variant="button"
                          style={{ fontWeight: 'bold' }}
                        >
                          {t.name}
                        </Typography>
                      </Button>
                    </ListItemIcon>
                    <ListItemSecondaryAction>
                      <IconButton
                        className={classes.rightIcons}
                        onClick={() => {
                          handleClick(t.id, parentIndex);
                        }}
                        name={t.name}
                      >
                        {t.expanded ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Collapse
                    unmountOnExit
                    in={t.expanded || false}
                    timeout="auto"
                  >
                    {t.sub.map((s, childIndex) => (
                      <div>
                        <List component="div" disablePadding>
                          <ListItem
                            dense
                            className={classes.nested}
                            key={childIndex}
                          >
                            <ListItemIcon>
                              <Checkbox
                                // disableRipple
                                edge="start"
                                checked={!!s.checked}
                                tabIndex={-1}
                                onChange={() => {
                                  handleCheckbox(
                                    t.id,
                                    parentIndex,
                                    t.id,
                                    childIndex
                                  );
                                }}
                                name="userGet"
                              />
                            </ListItemIcon>
                            <ListItemText primary={s.name} />
                          </ListItem>
                        </List>
                      </div>
                    ))}
                  </Collapse>
                </div>
              ))}

              {/* <ListItem dense key={2}>
            <ListItemIcon>
              <Checkbox
                disableRipple
                edge="start"
                onChange={handlePrimaryChange}
                name="user"
              />
            </ListItemIcon>
            <ListItemIcon>
              <Button
                disableFocusRipple
                disableRipple
                classes={{ outlined: classes.button }}
                variant="outlined"
                size="small"
              >
                User Endpoint
              </Button>
            </ListItemIcon>
            <ListItemSecondaryAction>
              <IconButton className={classes.rightIcons} onClick={handleClick}>
                {open ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse unmountOnExit in={open} timeout="auto">
            <List component="div" disablePadding>
              <ListItem dense className={classes.nested}>
                <ListItemIcon>
                  <Checkbox
                    disableRipple
                    edge="start"
                    checked={state.userGet}
                    tabIndex={-1}
                    onChange={handleSecondaryChange}
                    name="userGet"
                  />
                </ListItemIcon>
                <ListItemText primary="Get Method" />
              </ListItem>
              <ListItem dense className={classes.nested}>
                <ListItemIcon>
                  <Checkbox
                    disableRipple
                    edge="start"
                    checked={state.userGetById}
                    tabIndex={-1}
                    onChange={handleSecondaryChange}
                    name="userGetById"
                  />
                </ListItemIcon>
                <ListItemText primary="Get by id" />
              </ListItem>
            </List>
          </Collapse> */}
            </List>
          </div>

          <Box flexDirection="row" marginLeft={2}>
            <Divider />
            <Button
              style={{
                marginTop: 10,
                borderRadius: 10,
                marginLeft: 230,
                backgroundColor: '#33691e',
                textTransform: 'none',
              }}
              variant="contained"
              color="primary"
              size="small"
              onClick={runAllTests}
              disabled={loading}
            >
              Run
              <Play />
            </Button>
            {/* <Button
              style={{
                borderRadius: 35,
                marginLeft: 10,
              }}
              variant="contained"
              color="secondary"
              size="small"
              onClick={selectAllTests}
            >
              Select All{' '}
            </Button> */}
          </Box>
        </div>
      </Drawer>

      <main className={classes.content}>
        {loading ? <CircularProgress color="secondary" /> : null}

        {results
          ? results.map((r, index) => {
              {
                console.log(r);
              }
              return <Result result={r} />;
            })
          : null}

        {statistics ? <Summary statistics={statistics} /> : null}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
