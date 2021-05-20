import * as React from 'react';
import { AlertService } from '../../../index';
const newAlert = new AlertService();
const addT = (conf: string) => {
  newAlert.add(JSON.parse(conf));
};
// arbitrary js object:
const myJsObj = {
  dismissIn: 3500,
  title: 'test',
  appearance: 'info',
  message: 'test message',
  actions: [
    {
      label: 'button label',
      onClick: () => alert('example')
    }
  ]
};
// using JSON.stringify pretty print capability:
const confSample = JSON.stringify(myJsObj, undefined, 4);
export const alertService = () => {
  const [conf, setConf] = React.useState(confSample);
  return (
    <>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column w-50">
          <label>Enter sample toast config :</label>
          <br />
          <textarea
            id="toast_config_input_example"
            value={conf}
            onChange={event => setConf(event.target.value)}
            rows={15}
            cols={50}
          />
          <small>
            AlertService.add({JSON.stringify({ title: 'test', appearance: 'info', message: 'test message' })})
          </small>
          <br />
        </div>
        <div className="d-flex flex-row m-auto justify-content-center w-50">
          <button className="w-50" style={{ padding: '10px' }} onClick={() => addT(conf)}>
            Add toast
          </button>
        </div>
      </div>
    </>
  );
};

const customCode = `
() => {
  // const newAlert = new AlertService({dismissIn:3500,position:'left|right'});
  //       { dismissIn:3500, title: "test", appearance: "info", message: "test message", actions: [{
  //           label: "button label",
  //           onClick: (e: any)=>alert(e)
  //        }]}
  //  newAlert.add({title: "test", appearance: "info", message: "test message"});
  //  newAlert.remove(toastId);
  const [conf, setConf] = React.useState(confSample);
  return(
   <>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column w-50">
          <label>Enter sample toast config :</label>
          <br />
          <textarea
            id="toast_config_input_example"
            value={conf}
            onChange={event => setConf(event.target.value)}
            rows={15}
            cols={50}
          />
                    <small>AlertService.add({JSON.stringify({title: "test", appearance: "info", message: "test message"})})</small>
             <br />
        </div>
        <div className="d-flex m-auto flex-row justify-content-center w-50">
        <button className="w-50" style={{ padding: '10px' }} onClick={()=>addT(conf)}>
            Add toast
        </button>
        </div>
       </div>
    </>
  );
}
`;
export default {
  title: 'Patterns/AlertService/Alert Service',
  component: AlertService,
  parameters: {
    docs: {
      docPage: {
        customCode,
        imports: { AlertService, newAlert, addT, confSample },
        noProps: true,
        title: 'Alert Service'
      }
    }
  }
};
