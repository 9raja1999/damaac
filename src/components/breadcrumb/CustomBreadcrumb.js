import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'gatsby'
import { ForwardArrowIcon } from '../../constants/svg/icons'

const CustomBreadcrumb = () => {
    return (
        <div className='bread__crumb'>
            <Breadcrumb
                separator={<ForwardArrowIcon />}
                items={[
                    {
                        title: <Link to='/'>UAE</Link>,
                    },
                    {
                        title: <Link to='/'>DUBAI</Link>,
                    },
                    {
                        title: <Link to='/'>DAMAC LAGOONS</Link>,
                    },
                    {
                        title: <Link to='/'>VENICE</Link>,
                    },
                    {
                        title: 'AYKC3D/79/7906',
                    },

                ]}
            />
        </div>
    );
};

export default CustomBreadcrumb;