import styled from "styled-components";
import banner1 from '../../assets/img1.png';
import banner2 from '../../assets/img2.png';
import banner3 from '../../assets/img3.png';
import banner4 from '../../assets/img4.png';

export const Container = styled.div`
  margin: 16px;
  border-radius: 5px;
  max-width: 1600px;
`;

export const TransactionsContainer = styled.div`
  display: flex;
  margin-top: 16px;

  @media only screen and (max-width: 1200px) {
    display: grid;
  }
`;

export const TransactionsArea = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  padding: 16px 1px 16px 16px;

  & + & {
    margin-left: 12px;

    @media only screen and (max-width: 1200px) {
      margin-left: 0px;
      margin-top: 16px;
    }
  }
`;

export const TransactionTitle = styled.p`
  margin-bottom: 16px;
`;

export const Transactions = styled.div`
  max-height: 350px;
  overflow-y: auto;
`;

export const Transaction = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(188, 189, 189, 0.4);
  margin-right: 16px;
`;

export const TransactionInfo = styled.div`
  margin-left: 8px;
  padding: 8px;
`;

export const TransactionUserText = styled.p`
  color: rgb(44, 44, 44);
  font-size: 10px;
  line-height: 16px;
`;

export const TransactionValueText = styled.p`
  font-weight: 500;
  color: rgb(56, 109, 130);
  font-size: 13px;
  line-height: 21px;
`;

export const TransactionDescriptionText = styled.p`
  color: rgb(88, 89, 91);
  font-size: 10px;
  line-height: 16px;
`;

export const TransactionDocumentText = styled.p`
  color: rgb(88, 89, 91);
  font-size: 10px;
  line-height: 16px;
`;

export const LoadingText = styled(TransactionDescriptionText)`
  text-align: center;
`;

export const TransactionDocumentArea = styled.div`
  display: flex;
  align-items: center;
`;

export const TransactionDocumentDot = styled.div`
  height: 10px;
  width: 10px;
  background-color: rgb(245, 216, 125);
  border-radius: 50%;
  margin-right: 8px;
`;

export const CondoShopTitle = styled.p`
  margin-top: 16px;
  color: rgb(44, 44, 44);
  font-size: 18px;
  line-height: 27px;
`;

export const CondoShopBanners = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CondoShopBanner = styled.div`
  cursor: pointer;
  height: 200px;
  width: 300px;
  border-radius: 5px;
  margin-top: 16px;
  margin-right: 12px;
`;

export const CondoShopBannerReceitaGarantida = styled(CondoShopBanner)`
  background-image: url(${banner1});
`;

export const CondoShopBannerBoletoZero = styled(CondoShopBanner)`
  background-image: url(${banner2});
`;

export const CondoShopBannerFinanciamento = styled(CondoShopBanner)`
  background-image: url(${banner3});
`;

export const CondoShopBannerSeguro = styled(CondoShopBanner)`
  background-image: url(${banner4});
`;
