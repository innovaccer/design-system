import * as React from 'react';
import { AlertService } from '../../../index';
const newAlert = new AlertService();
newAlert.renderAlert();
export const alertService = () => <></>;

const customCode = `
() => {
  // const newAlert = new AlertService({dismissIn:1000,position:'left|right'});
  //       newAlert.renderAlert();
  //       { dismissIn:1000, title: "test", appearance: "info", message: "test message", actions: [{
  //           label: "button label",
  //           onClick: (e: any)=>console.log(e)
  //        }]}
   let toastId = newAlert.addToast({title: "test", appearance: "info", message: "test message"});
   //newAlert.removeToast(toastId);
  return(
     <div>Alert Service</div>
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
        imports: { AlertService, newAlert },
        noProps: true,
        title: 'Alert Service'
      }
    }
  }
};
