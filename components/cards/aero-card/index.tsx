import { AeroCardContainer } from './container';
import Card from './card';
import Text from '../../texts/text';
import BrandButton from '../../buttons/brand-button';

function AeroCard() {
  return (
    <AeroCardContainer>
      <div className='header'>
        <Text color='gray900'>Add Balance</Text>
      </div>
      <div className='content-wrapper'>
        <Card />
        <div className='buttons'>
          <div className='buttons-selectors'>
            <BrandButton width='85px' height='35px'>
              1000
            </BrandButton>
            <BrandButton width='85px' height='35px' selected>
              5000
            </BrandButton>
            <BrandButton width='85px' height='35px' className='buttons-selectors-last'>
              7500
            </BrandButton>
          </div>
          <div className='buttons-add-button'>
            <BrandButton width='100%' height='51px' selected>
              Add points
            </BrandButton>
          </div>
        </div>
      </div>
    </AeroCardContainer>
  );
}

export default AeroCard;
