import React from 'react';
import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import {FaWallet, FaEthernet} from 'react-icons/fa';
import {GiReceiveMoney } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  ProductsSection,
  ProductsWrapper,
  ProductsHeading,
  ProductsContainer,
  ProductsCard,
  ProductsCardInfo,
  ProductsCardIcon,
  ProductsCardPlan,
  // ProductsCardCost,
  ProductsCardLength,
  ProductsCardFeatures,
  ProductsCardFeature
} from './Products.elements';

function Products() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ProductsSection>
        <ProductsWrapper>
          <ProductsHeading>Our Products</ProductsHeading>
          <ProductsContainer>
            <ProductsCard to='/log-in'>
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <GiReceiveMoney />
                </ProductsCardIcon>
                <ProductsCardPlan>Buy </ProductsCardPlan>
                {/* <ProductsCardCost>Get some ETH</ProductsCardCost> */}
                <ProductsCardLength>Get Some Eth</ProductsCardLength>
                <ProductsCardFeatures>
                 
                  <ProductsCardLength>ETH is the native crypto of Ethereum. You’ll need some ETH in your wallet to use Ethereum applications.</ProductsCardLength>
                </ProductsCardFeatures>
                <Button primary>Get Some Eth</Button>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to='/wallet'>
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <FaWallet />
                </ProductsCardIcon>
                <ProductsCardPlan>Wallet </ProductsCardPlan>
                
                <ProductsCardLength>The key to your digital future</ProductsCardLength>
                <ProductsCardFeatures>
                  <ProductsCardLength>Wallets give access to your funds and Ethereum applications. Only you should have access to your wallet.</ProductsCardLength>
                  
                </ProductsCardFeatures>
                <Button primary>Set Up Wallet</Button>
              </ProductsCardInfo>
            </ProductsCard>
            <ProductsCard to='/wallet'>
              <ProductsCardInfo>
                <ProductsCardIcon>
                  <FaEthernet />
                </ProductsCardIcon>

                <ProductsCardPlan>DeFi </ProductsCardPlan>
                {/* <ProductsCardCost>$999.99</ProductsCardCost> */}
                <ProductsCardLength>A global, open alternative to the current financial system.</ProductsCardLength>
                <ProductsCardFeatures>
                  <ProductsCardFeature>Lending Dapps</ProductsCardFeature>
                  <ProductsCardFeature>Token Exchanges</ProductsCardFeature>
                  <ProductsCardFeature>Trading Dapps</ProductsCardFeature>
                </ProductsCardFeatures>
                <Button primary>Coming Soon</Button>
              </ProductsCardInfo>
            </ProductsCard>
          </ProductsContainer>
        </ProductsWrapper>
      </ProductsSection>
    </IconContext.Provider>
  );
}
export default Products;