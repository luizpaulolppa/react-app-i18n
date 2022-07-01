import React, { useEffect, useState } from "react";
import { MdOutlineMonetizationOn } from "react-icons/md";
import AccountBalance from "../../components/AccountBalance";
import {
  ITransaction,
  getTransactionsSync,
  getDocumentsSync,
  getSchedulesSync,
} from "../../services/Transactions";

import {
  Container,
  TransactionsContainer,
  TransactionsArea,
  Transactions,
  TransactionTitle,
  Transaction,
  TransactionInfo,
  TransactionUserText,
  TransactionValueText,
  TransactionDescriptionText,
  LoadingText,
  TransactionDocumentText,
  TransactionDocumentArea,
  TransactionDocumentDot,
  CondoShopTitle,
  CondoShopBannerReceitaGarantida,
  CondoShopBannerBoletoZero,
  CondoShopBannerFinanciamento,
  CondoShopBannerSeguro,
  CondoShopBanners,
} from "./styles";

const CondominiumHome: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [documents, setDocuments] = useState<ITransaction[]>([]);
  const [schedules, setSchedules] = useState<ITransaction[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [loadingDocuments, setLoadingDocuments] = useState(false);
  const [loadingSchedules, setLoadingSchedules] = useState(false);

  useEffect(() => {
    loadTransactions();
    loadDocumentos();
    loadSchedules();
  }, []);

  async function loadTransactions() {
    setLoadingTransactions(true);
    setTransactions(await getTransactionsSync());
    setLoadingTransactions(false);
  }

  async function loadDocumentos() {
    setLoadingDocuments(true);
    setDocuments(await getDocumentsSync());
    setLoadingDocuments(false);
  }

  async function loadSchedules() {
    setLoadingSchedules(true);
    setSchedules(await getSchedulesSync());
    setLoadingSchedules(false);
  }

  return (
    <Container>
      <AccountBalance />
      <TransactionsContainer>
        <TransactionsArea>
          <TransactionTitle>Últimas transações</TransactionTitle>
          <Transactions>
            {loadingTransactions && (
              <LoadingText>Carregando transações...</LoadingText>
            )}
            {transactions.map(({ user, description, value }) => (
              <Transaction>
                <MdOutlineMonetizationOn size={25} color={"#386D82"} />
                <TransactionInfo>
                  <TransactionUserText>
                    Resgate de Fundo pelo {user}
                  </TransactionUserText>
                  <TransactionValueText>+ R$ {value}</TransactionValueText>
                  <TransactionDescriptionText>
                    {description}
                  </TransactionDescriptionText>
                </TransactionInfo>
              </Transaction>
            ))}
          </Transactions>
        </TransactionsArea>
        <TransactionsArea>
          <TransactionTitle>Documentos pendentes</TransactionTitle>
          <Transactions>
            {loadingDocuments && (
              <LoadingText>Carregando documentos...</LoadingText>
            )}
            {documents.map(({ user, description, value }) => (
              <Transaction>
                <MdOutlineMonetizationOn size={25} color={"#386D82"} />
                <TransactionInfo>
                  <TransactionUserText>
                    Resgate de Fundo pelo {user}
                  </TransactionUserText>
                  <TransactionValueText>+ R$ {value}</TransactionValueText>
                  <TransactionDescriptionText>
                    {description}
                  </TransactionDescriptionText>
                  <TransactionDocumentArea>
                    <TransactionDocumentDot />
                    <TransactionDocumentText>
                      DOCUMENTO DE REFERÊNCIA PENDENTE
                    </TransactionDocumentText>
                  </TransactionDocumentArea>
                </TransactionInfo>
              </Transaction>
            ))}
          </Transactions>
        </TransactionsArea>
        <TransactionsArea>
          <TransactionTitle>Próximos agendamentos</TransactionTitle>
          <Transactions>
            {loadingSchedules && (
              <LoadingText>Carregando agendamentos...</LoadingText>
            )}
            {schedules.map(({ user, description, value }) => (
              <Transaction>
                <MdOutlineMonetizationOn size={25} color={"#386D82"} />
                <TransactionInfo>
                  <TransactionUserText>
                    Resgate de Fundo pelo {user}
                  </TransactionUserText>
                  <TransactionValueText>+ R$ {value}</TransactionValueText>
                  <TransactionDescriptionText>
                    {description}
                  </TransactionDescriptionText>
                </TransactionInfo>
              </Transaction>
            ))}
          </Transactions>
        </TransactionsArea>
      </TransactionsContainer>
      <CondoShopTitle>Condo Shop</CondoShopTitle>
      <CondoShopBanners>
        <CondoShopBannerReceitaGarantida />
        <CondoShopBannerBoletoZero />
        <CondoShopBannerFinanciamento />
        <CondoShopBannerSeguro />
      </CondoShopBanners>
    </Container>
  );
};

export default CondominiumHome;
