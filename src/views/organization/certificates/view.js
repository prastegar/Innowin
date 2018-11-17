//@flow
/*global __*/
import * as React from 'react';
import {CertificateEditForm} from './forms';
import {ItemHeader, ItemWrapper} from "../../common/cards/Frames";
import {CertificateIcon, starIcon} from "src/images/icons";
import {ImageViewer} from '../../common/ImageViewer';

type CertificateItemWrapperProps = {
    children :React.Node
}
export const CertificateItemWrapper = (props:CertificateItemWrapperProps) => {
    return <ItemWrapper icon={<CertificateIcon />}>{props.children}</ItemWrapper>;
};

type CertificateViewProps = {
    showEdit: Function,
    certificate: Object,
}
export class CertificateView extends React.Component<CertificateViewProps> {
    render() {
        const {certificate, showEdit} = this.props;
        return (
            <div className="col text-center container-fluid">
                <div className="row">
                    <div className="col certificate">
                        <div className="content">
                            {certificate.certificate_picture ? 
                            <ImageViewer
                                label={__('Post pictures') + ": "}
                                mediaId={certificate.certificate_picture} 
                            /> : 
                            <img src="/static/media/defaultImg.94a29bce.png" />
                            }
                            <h5>{certificate.title}</h5>

                            <a className="shareButton">{starIcon}</a>
                            <span>&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

type CertificateProps = {
	certificate:Object,
	updateCertificate: Function,
	deleteCertificate: Function,
}
export class Certificate extends React.Component<CertificateProps,{edit:boolean,certificate:Object}> {
    constructor(props:CertificateProps){
        super(props);
        const {certificate} = props;
        this.state = {edit: false, certificate:certificate};
    }
    componentWillReceiveProps(props:CertificateProps){
        const {certificate} = props;
        this.setState({...this.state, certificate:certificate})
    }

    showEdit = () => {
        this.setState({edit: true});
    };

    hideEdit = () => {
        this.setState({edit: false});
    };

	render() {
		const {certificate} = this.props;
		if (this.state.edit) {
			return <CertificateItemWrapper>
				<CertificateEditForm
					certificate = {certificate}
					hideEdit = {this.hideEdit}
					remove = {this.props.deleteCertificate}
					update = {this.props.updateCertificate}
				/>
			</CertificateItemWrapper>;
		}
		return <CertificateView certificate={certificate} showEdit={this.showEdit}/>;
	}
}
