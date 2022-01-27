// check how to make files downloadable

import * as React from "react";
import { Container, Typography } from "@mui/material";

export default function Links() {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "3rem" }}>
        Useful Links
      </Typography>

      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", marginBottom: "8vh" }}
      >
        <b>My Nice Home Guides by HDB: </b>
        <br />
        <a
          href="https://www.mynicehome.gov.sg/hdb-how-to/buy-your-flat/your-guide-to-buying-a-bto-flat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buying a BTO flat
        </a>
        <br />
        <a
          href="https://www.mynicehome.gov.sg/hdb-how-to/buy-your-flat/a-guide-to-hdb-bto-flat-types/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BTO Flat Types
        </a>
        <br />
        <a
          href="https://www.mynicehome.gov.sg/hdb-how-to/buy-your-flat/a-guide-to-the-hdb-flat-portal-for-bto-buyers"
          target="_blank"
          rel="noopener noreferrer"
        >
          HDB Flat portal for BTO buyers
        </a>
        <br />
        <a
          href="https://www.mynicehome.gov.sg/hdb-how-to/buy-your-flat/a-guide-to-the-enhanced-cpf-housing-grant-ehg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enhanced CPF Housing Grant (EHG)
        </a>
        <br />
        <a
          href="https://www.mynicehome.gov.sg/hdb-how-to/a-guide-to-hdb-flat-priority-schemes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flat Priority Schemes
        </a>
        <br />
        <br />
        <b>Other articles / analytical websites: (not sponsored)</b>
        <br />
        <a
          href="https://blog.seedly.sg/category/bto-housing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seedly
        </a>
        <br />
        <a
          href="https://www.hausanalyst.com/bto/category/all"
          target="_blank"
          rel="noopener noreferrer"
        >
          hausanalyst
        </a>
        <br />
        <a
          href="https://stackedhomes.com/editorial/category/hdb/bto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stackedhomes
        </a>
        <br />
        <a
          href="https://www.99.co/singapore/insider/category/guides/analysis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          99.co
        </a>
        <br />
        <a
          href="https://www.renonation.sg/articles-search?category=&tag=analysis"
          target="_blank"
          rel="noopener noreferrer"
        >
          renonation
        </a>
        <br />
        <a
          href="https://www.btohq.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          btohq
        </a>
        <br />
        <br />
        <b>Other useful links: </b>
        <br />
        <a
          href="https://thewokesalaryman.com/2020/09/25/the-tws-guide-to-buying-your-hdb-flat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The TWS guide to buying your HDB flat
        </a>
        <br />
        <a
          href="https://esales.hdb.gov.sg/bp25/MNHG/eamnhindex/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HDB's Virtual Showflats
        </a>
        <br />
        <a
          href="https://www.teoalida.com/singapore/btobrochures"
          target="_blank"
          rel="noopener noreferrer"
        >
          BTO brochure archive on TeoAlida
        </a>
        <br />
        <br />
        <b>Downloadable files: </b>
        <br />
        How to check remaining flats & ethnic quota (.pdf)
        <br />
        How to check last queue number of the day (.png)
      </Typography>
    </Container>
  );
}
