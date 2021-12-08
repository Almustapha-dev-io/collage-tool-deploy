import React from 'react';
import { useHistory } from 'react-router';

import { PrimaryButton } from 'components/ui/StyledButtons';
import { CenteredWrapper } from 'components/ui/StyledContainers';
import NotFoundSvg from 'assets/404.svg';

const PageNotFound: React.FC = () => {
    const { push } = useHistory();

    return (
        <CenteredWrapper>
            <img src={NotFoundSvg} alt="Not found" style={{ maxHeight: '350px' }}/>
            <PrimaryButton onClick={() => push('/')}>Go back</PrimaryButton>
        </CenteredWrapper>
    );
};

export default PageNotFound;
