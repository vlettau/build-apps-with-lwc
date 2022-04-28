import { LightningElement, wire } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
//* BearController.getAllBears() Apex method */
import getAllBears from '@salesforce/apex/BearController.getAllBears';
export default class BearList extends LightningElement {
	//^method using lioghtning data service
	@wire(getAllBears) bears;
	appResources = {
		bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
	};

	/*//^ Apex version for getting bear data
	// bears;
	// error;
	// appResources = {
	// 	bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
	// };
	// connectedCallback() {
	// 	this.loadBears();
	// }
	// loadBears = () => {
	// 	getAllBears()
	// 		.then((result) => {
	// 			this.bears = result;
	// 		})
	// 		.catch((error) => {
	// 			this.error = error;
	// 		});
	// };
    */
}

