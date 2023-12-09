import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <Box pt="16px" p="16px">
      <Typography variant="h4" gutterBottom>
        Floyx LLC Privacy Policy
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Last updated: 16th April 2023
      </Typography>
      <Typography variant="body1" paragraph>
        This Privacy Policy shall apply to the entire service owned and offered
        by Floyx LLC. Floyx LLC is the body responsible for the processing of
        personal data. Our Data Protection Officer is Mr. Daniel Syrek.
      </Typography>

      {/* Similarly, use Typography for other sections */}
      <Typography variant="h5" gutterBottom>
        Definitions
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Administrator</strong> – the body responsible for administration
        of data as per Article 4 (7) of GDPR, namely Floyx LLC – owner and
        operator of Floyx platform and services, located in 16192 Coastal
        Highway, Lewes, Delaware 19958, County of Sussex, registered by the
        Delaware Registered as a Limited Liability Company under Companies Act,
        1961, registration number 6099676.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Service</strong> – a collective of services offered by the Floyx
        platform, as well as the platform itself, and every other service
        provided by Floyx LLC. related to the Floyx platform project.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>User</strong> – a person, a company or an organization without a
        specified legal personality, that makes use of the Service and has
        accepted our Terms of Service.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Personal Data</strong> – all of users’ personal data as defined
        by Article 4 (1) of GDPR and collected by continuous use of the Service.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Personal data processing</strong> – all operations using
        personal data as defined in Article 4 (2) of GDPR.
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>GDPR</strong> - Regulation on the protection of natural persons
        with regard to the processing of personal data and on the free movement
        of such data, and repealing Directive 95/46/EC (J. ref. L119, 4th May
        2016, p. 1-88).
      </Typography>

      <Typography variant="body1" paragraph>
        <strong>Terms of Service, ToS</strong> – Our Terms of Service, available
        on [website].
      </Typography>

      <Typography variant="h5" gutterBottom>
        General Information
      </Typography>
      <Typography variant="body1" paragraph>
        The Service is gathering information about its Users and their behavior
        by means of: Collecting form data; Saving cookie files; Storing logs of
        www servers and other information created by continuous use of the
        Service.
      </Typography>

      {/* Rules on collecting Users’ Personal Data Section */}
      <Typography variant="h6" gutterBottom>
        Rules on collecting Users’ Personal Data
      </Typography>
      <Typography variant="body1" paragraph>
        Service may gather information about the connection parameters of the
        User (timestamp, IP address, etc.).
      </Typography>

      <Typography variant="body1" paragraph>
        Collected data is never accessed by any third party, unless a requesting
        party has an authority to enforce such a request in accordance with
        European law, including domestic judicial authorities to the extent
        permitted by the law.
      </Typography>

      <Typography variant="body1" paragraph>
        Collected data is never forwarded to any third party, unless:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>It is done on User’s explicit request;</li>
        <li>
          It will be deemed necessary to do so because of technical issues,
          processing payments and/or any contractual obligation that Floyx LLC.
          may have with its’ third-party providers.
        </li>
        <li>
          It will be deemed necessary in order to fulfill a request submitted by
          judicial authorities with an authority to enforce such a request.
          Administrator may grant access to personal data to its’ legal counsel
          as well.
        </li>
      </Typography>

      {/* Scope of collecting Personal Data and its processing Section */}
      <Typography variant="h6" paragraph>
        Using our Service requires creating a User account. To create a User
        account, User is obliged to provide:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>E-mail address;</li>
        <li>Password;</li>
        <li>Name and surname (or company name);</li>
        <li>
          Obtaining permission to the camera and photo folder in case the user
          wants or intends to add photos/videos and other content from his
          devices;
        </li>
        <li>
          Phone number, to verify the authenticity of the user when using the
          reference link system in floyx;
        </li>
        <li>
          Name, first name, last name, email - when using login through other
          social medias.
        </li>
      </Typography>

      <Typography variant="body1" paragraph>
        Data provided when creating a User account will be verified by means of
        an activation e-mail sent to User upon submitting a registration form on
        an e-mail address provided in the form.
      </Typography>

      <Typography variant="body1" paragraph>
        User takes full responsibility for data provided during the registration
        process. Data provided is processed in accordance with Regulation on the
        protection of natural persons with regard to the processing of personal
        data and on the free movement of such data, and repealing Directive
        95/46/EC (J. ref. L119, 4th May 2016, p. 1-88).
      </Typography>

      <Typography variant="body1" paragraph>
        Legal basis on processing User personal data is consent provided during
        registration. Providing personal data to Floyx LLC. is voluntary, but
        necessary to gain access to our Service.
      </Typography>

      <Typography variant="body1" paragraph>
        User Personal Data will never be forwarded to any third party without
        earlier notice to User, except for request submitted by a party with an
        authority to enforce such a request without notifying the User.
      </Typography>

      <Typography variant="body1" paragraph>
        Every User has a right to review, edit or delete his Personal Data from
        the Service, unless it is currently being processed as a part of an
        ongoing investigation based on domestic or European law.
      </Typography>

      <Typography variant="body1" paragraph>
        In case User has an active dispute with Floyx over his access to the
        Service, any changes to personal data will take effect after resolving
        such a dispute.
      </Typography>

      <Typography variant="body1" paragraph>
        Any information provided by User during the registration process will be
        secured and stored until the end of period of legal obligation to do so
        in accordance with European law.
      </Typography>

      {/* User rights Section */}
      <Typography variant="h5" gutterBottom>
        User Rights
      </Typography>

      <Typography variant="body1" paragraph>
        User has a right to access his personal data and to modify it.
      </Typography>

      <Typography variant="body1" paragraph>
        User has a right to demand a modification, update or correction of his
        personal data, temporal or permanent cease of processing and/or its
        removal, in case they are proven to be incomplete, incorrect, have been
        collected without full compliance with domestic and/or European law or
        are deemed useless for the cause they were collected for.
      </Typography>

      <Typography variant="body1" paragraph>
        Administrator may decline a personal data removal request if doing so is
        at the moment prohibited by law, data is a part of an ongoing
        investigation or there is an open dispute over Service access between
        Floyx and the User.
      </Typography>

      <Typography variant="body1" paragraph>
        In case of any doubts regarding methods of personal data processing User
        may submit a request of explanation to the Administrator or file a
        query/complaint to the authority overlooking the process.
      </Typography>

      <Typography variant="body1" paragraph>
        The legal basis of personal data processing is User consent and our
        Terms of Service.
      </Typography>

      <Typography variant="body1" paragraph>
        If User has any questions regarding his personal data stored by Floyx,
        he may direct such to our Data Protection Officer:{' '}
        <Link href="mailto:data.protection@floyx.com">
          data.protection@floyx.com
        </Link>
        .
      </Typography>

      <Typography variant="h5" gutterBottom>
        Cookie Files Disclaimer
      </Typography>

      <Typography variant="body1" paragraph>
        This Service uses cookie files. Cookie files consist of IT data,
        including, but not limited to text files, that are being stored on
        User’s computer and are used to provide full Service functionality.
        Usually cookie files contain the website’s name, its unique ID and time
        spent on User’s computer.
      </Typography>

      <Typography variant="body1" paragraph>
        Administrator is responsible for storing cookie files on User computer
        and is the only party that may gain access to them.
      </Typography>

      <Typography variant="body1" paragraph>
        Cookie files are being used for the following purposes:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>User website movement statistics;</li>
        <li>
          Maintaining User’s session as active without the requirement of
          logging in on every single sub-page on Floyx platform after logging
          in;
        </li>
        <li>
          Defining a User profile in order to provide him with personalized
          advertisement content.
        </li>
      </Typography>

      <Typography variant="body1" paragraph>
        This Service makes use of two kinds of cookie files:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>
          Session cookies – temporary files, that are being created at the
          moment of logging in and deleted after closing a User’s internet
          browser.
        </li>
        <li>
          Persistent cookies – files that are being stored on User’s computer
          regardless of the Service usage. Those may be deleted by the User
          manually.
        </li>
      </Typography>

      <Typography variant="body1" paragraph>
        Internet browsers usually are automatically set to allow storing cookie
        files on User’s computer. User may change these in his browser settings.
        Internet browsers are also equipped with tools to delete cookie files
        and automatically block them from being stored. Relevant information may
        be found in User’s browser support sites. Limiting the functionality of
        cookie files may result in defective Service performance.
      </Typography>

      <Typography variant="body1" paragraph>
        Cookie files may be used by advertising networks, such as Google, to
        adapt content of the advertisements being shown to User while using our
        Service. Those files may retain information such as User’s navigation
        path or time spent on certain sub-sites of our Service.
      </Typography>

      <Typography variant="body1" paragraph>
        User may review and edit information deriving from cookie files history
        collected by Google network on:
        <Link
          href="https://www.google.com/ads/preferences/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.google.com/ads/preferences/
        </Link>
        .
      </Typography>

      <Typography variant="h5" gutterBottom>
        Server Logs
      </Typography>

      <Typography variant="body1" paragraph>
        Information about certain User movement in our Service may be stored in
        server logs. This data is used by Floyx in order to provide the highest
        quality of service, as well as a proof material in ongoing
        investigations related to certain crimes.
      </Typography>

      <Typography variant="body1" paragraph>
        Among the resources being saved in our server logs a User may find:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>Query time;</li>
        <li>Response time;</li>
        <li>User IP address;</li>
        <li>Bug reports;</li>
        <li>Referral links;</li>
        <li>User’s browser information.</li>
      </Typography>

      {/* Contact Information Section */}
      <Typography variant="h6" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" paragraph>
        User may contact the Service administrator via e-mail:
        support@floyx.com. Regarding any data protection question, please direct
        Your queries to our Data Protection Officer, Mr. Daniel Syrek:
        data.protection@floyx.com.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;