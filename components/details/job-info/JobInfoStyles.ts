import styled from 'styled-components';

import { media } from '../../../styles/GlobalStyles';

export const JobInfoWrapper = styled.section`
  background-color: ${({ theme }) => theme.bg};
  padding: 4.6rem 4.8rem;
  max-width: 73rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 3.2rem;
  margin-bottom: 8rem;
  border-radius: 0.6rem;

  ${media.phone} {
    padding: 4rem 2.4rem;
    margin-top: 2.4rem;
    margin-bottom: 6.4rem;
  }
`;

export const JobMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${media.phone} {
    flex-direction: column;
    gap: 5rem;

    a {
      min-width: 100%;
    }
  }
`;

export const JobMetaText = styled.div`
  p {
    color: ${({ theme }) => theme.bodySummary};
    display: flex;
    gap: 1.2rem;
    margin-bottom: 1.1rem;
  }

  h1 {
    font-size: var(--font-size-heading-xl);
    color: ${({ theme }) => theme.bodySecondary};
    margin-bottom: 0.7rem;
  }

  h3 {
    font-size: var(--font-size-heading-s);
    color: var(--color-violet);
  }

  ${media.phone} {
    h1 {
      font-size: var(--font-size-heading-m);
    }
  }
`;

export const JobDescription = styled.div`
  margin-top: 4.6rem;
  p {
    color: ${({ theme }) => theme.bodySummary};
    margin-bottom: 2.4rem;
  }

  p:nth-of-type(1) {
    margin-bottom: 4rem;
  }

  h3 {
    font-size: var(--font-size-heading-m);
    color: ${({ theme }) => theme.bodySecondary};
    margin-bottom: 2.8rem;
  }

  ul,
  ol {
    color: ${({ theme }) => theme.bodySummary};

    margin-inline-start: 1.6rem;
  }

  ol {
    list-style: none;
    margin-left: 0;
    li {
      position: relative;
      counter-increment: custom;
      padding-left: 3.8rem;
    }
  }

  ol li:before {
    position: absolute;
    left: 0;
    content: counter(custom) ' ';
    color: var(--color-violet);
    font-weight: 700;
  }

  ol li:first-child {
    counter-reset: custom;
  }

  ul {
    margin-bottom: 4.8rem;
  }

  li {
    padding-left: 2.4rem;
    margin-block-start: 1rem;
    line-height: var(--line-height-body);
    &::marker {
      color: var(--color-violet);
      font-weight: 700;
    }
  }
`;
