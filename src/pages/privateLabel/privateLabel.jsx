import React from 'react'
import './privateLabel.css';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'
import PlLeftComponent from '../../components/plLeftComponent/plLeftComponent'
import PlRightComponent from '../../components/plRightComponent/plRightComponent'
import SLTR from '../../components/desktop/SLTR/sltr'
import SLTL from '../../components/desktop/SLTL/sltl'
import plimage1 from '../../assets/images/privatelabel/private_label.1.jpg'
import plimage2 from '../../assets/images/privatelabel/private_label.2.jpg'
import plimage3 from '../../assets/images/privatelabel/private_label.3.jpg'
import plimage4 from '../../assets/images/privatelabel/private_label.4.jpg'
import plimage5 from '../../assets/images/privatelabel/private_label.5.jpg'
import plimage6 from '../../assets/images/privatelabel/private_label6.jpg'



const PrivateLabel = () => {
    const { t } = useTranslation()

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 701px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-device-width: 700px)'
    })


    return (
        <div className="privateLabel">
            <div className="pl-entry">
                Private Label
            </div>
            { isDesktopOrLaptop && <>
                <SLTR
                    showButton={false}
                    portrait={true}
                    list={true}
                    title={t('privateLabelJewelleryTitle.label')}
                    subtitle={t('privateLabelJewelleryList.label', { returnObjects: true })}
                    image={plimage1}
                />
                <SLTL
                    color='rgb(207,191,166)'
                    showButton={false}
                    list={true}
                    title={t('privateLabelBeautyTitle.label')}
                    subtitle={t('privateLabelBeautyList.label', { returnObjects: true })}
                    image={plimage2}
                />
                <SLTR
                    color="rgb(215,187,142)"
                    showButton={false}
                    list={true}
                    title={t('privateLabelFashionTitle.label')}
                    subtitle={t('privateLabelFashionList.label', { returnObjects: true })}
                    image={plimage3}
                />
                <SLTL
                    color='rgb(233,220,201)'
                    showButton={false}
                    list={true}
                    title={t('privateLabelSwimwearTitle.label')}
                    subtitle={t('privateLabelSwimwearList.label', { returnObjects: true })}
                    image={plimage4}
                />
                <SLTR
                    color="black"
                    showButton={false}
                    list={true}
                    title={t('privateLabelHomeTitle.label')}
                    subtitle={t('privateLabelHomeList.label', { returnObjects: true })}
                    image={plimage5}
                />
                <SLTL
                    color="rgb(215,187,142)"
                    showButton={false}
                    list={true}
                    title={t('privateLabelBrandedTitle.label')}
                    subtitle={t('privateLabelBrandedList.label', { returnObjects: true })}
                    image={plimage6}
                />
            </>
            }

            { isMobile && <>
                <PlLeftComponent
                    title={t('privateLabelJewelleryTitle.label')}
                    list={t('privateLabelJewelleryList.label', { returnObjects: true })}
                    image={plimage1}
                />
                <PlRightComponent
                    color='rgb(207,191,166)'
                    title={t('privateLabelBeautyTitle.label')}
                    list={t('privateLabelBeautyList.label', { returnObjects: true })}
                    image={plimage2}
                />
                <PlLeftComponent
                    color="rgb(215,187,142)"
                    title={t('privateLabelFashionTitle.label')}
                    list={t('privateLabelFashionList.label', { returnObjects: true })}
                    image={plimage3}
                />
                <PlRightComponent
                    color='rgb(233,220,201)'
                    title={t('privateLabelSwimwearTitle.label')}
                    list={t('privateLabelSwimwearList.label', { returnObjects: true })}
                    image={plimage4}
                />
                <PlLeftComponent
                    color="black"
                    title={t('privateLabelHomeTitle.label')}
                    list={t('privateLabelHomeList.label', { returnObjects: true })}
                    image={plimage5}
                />
                <PlRightComponent
                    color="rgb(215,187,142)"
                    title={t('privateLabelBrandedTitle.label')}
                    list={t('privateLabelBrandedList.label', { returnObjects: true })}
                    image={plimage6}
                />
            </>
            }

        </div>
    )
}
export default PrivateLabel