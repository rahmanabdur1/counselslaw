
import React from 'react';
import AskQsection from './AskQsection';
import './AskQuestion.css'
const legalData = [
    {
        "Company law of Bangladesh": [
            {
                "title": "Should you register your partnership business?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "Permitted Activity of Liaison office",
                "content": "Maintain liaison/ coordination between principal and local agents, distributors/exporters’ institutions through correspondences, personal contracts and other electronic media. Collect, compile analyze and disseminate business information related to its field of activities as mentioned in the approval letter."
            },
            {
                "title": "What is Name Clearance?",
                "content": "This is a pre-requisite for registration of a new company (other than Foreign Company and Partnership firms) or a society or a trade organization.             Promoters of a new entity (company, society, or trade organization) apply for, and RJSC provides name clearance for one of the proposed names upon satisfaction that it does not closely match or resembles any of the already taken names (registered, booked or under the process of registration of the same entity type)"
            },
            {
                "title": "What is Returns filing?",
                "content": "Registered entities are to file returns in prescribed forms & schedules, and RJSC upon satisfaction approves and archives such records. There are two (2) types of returns, viz., ‘Annual Returns’ and ‘Returns for any Change in the Entity’"
            },
            {
                "title": "Winding up and dissolution of a company",
                "content": "A company can be dissolved voluntarily or involuntarily through a winding-up process. Creditors, shareholders, or the court can initiate the winding-up process."
            },
            {
                "title": "What is Name Clearance?",
                "content": "Promoters of a new entity (company, society, or trade organization) apply for, and RJSC provides name clearance for one of the proposed names upon satisfaction that it does not closely match or resembles any of the already taken names (registered, booked or under the process of registration of the same entity type)"
            }
        ]
    },
    {
        "Property law of Bangladesh": [
            {
                "title": "Can foreigners own property in Bangladesh?",
                "content": "The Articles 13 & 42 of the Constitution of the Peoples Republic of Bangladesh, which defines the “principles of ownership” and the “rights to property”, respectively, clarify that all the citizens of Bangladesh shall have the “right to acquire, hold, transfer or otherwise dispose of property”. However even the constitution does not provide any provision which specifically prevent a foreigner from owning land or any other property in Bangladesh."
            },
            {
                "title": "How can I register my land in Bangladesh?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "How do I find out who owns a property in Bangladesh?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "What is Khaitan?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "What is Namjari?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "Laws relating to Mutation in Bangladesh",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "Laws relating to Mutation in Bangladesh",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            }

        ]


    },
    {
        "Family Laws of Bangladesh": [

            {
                "title": "The Legal Process for obtaining a divorce in Bangladesh?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "Mutual Divorce procedure ?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "How can women divorce her husband in Bangladesh?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "Can women get their dower money if they give divorce?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "What happens if either party does not receive notice of divorce?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "What action can be taken if husband remarried without the consent of his current wife?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            }
        ]
    },

    {
        "TAX, VAT & Company Compliances": [

            {
                "title": "Which documents shall have to be preserved in order to maintain accounts?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "Which principles of account maintenance are followed by the new VAT system?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "How long should I maintain documents related to VAT?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "What is the procedure of submitting VAT or Turnover Tax Return?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "Who shall sign on the Return?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "Can Return be submitted without paying Net Tax or paying the same in part?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            }
        ]
    },
    {
        "Other issues": [

            {
                "title": "What are the processes of national NGO registration?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "What are the processes of International NGO registration?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "What legal action can be taken for dishonor cheque?",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            },
            {
                "title": "What are the different types of writ",
                "content": "A partnership business is not compulsory to register but it is advisable to register a partnership business. According to section 69 of the Partnership Act, 1932."
            }
        ]
    }
]

const AskQuestion = () => {
    return (
      <div className='container'>
        <div className='askQes'>
          <div className='left-column'>
            {legalData.slice(0, 2).map((topicSections, index) => (
              <div key={index}>
                <h2>{Object.keys(topicSections)[0]}</h2>
                {topicSections[Object.keys(topicSections)[0]].map((section, sectionIndex) => (
                  <AskQsection
                    key={sectionIndex}
                    title={section.title}
                    content={section.content}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className='right-column'>
            {legalData.slice(2).map((topicSections, index) => (
              <div key={index}>
                <h2>{Object.keys(topicSections)[0]}</h2>
                {topicSections[Object.keys(topicSections)[0]].map((section, sectionIndex) => (
                  <AskQsection
                    key={sectionIndex}
                    title={section.title}
                    content={section.content}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AskQuestion;