import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogContainer from "./BlogContainer";
import GenuisBoy from "../../assests/Genuis-guy.jpg";

function Singlepost() {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      imgLink: GenuisBoy,
      title: "Demystifying Artificial Intelligence: Understanding the Basics",
      content: (
        <div>
          <p>
            In recent years, Artificial Intelligence (AI) has emerged as one of
            the most transformative technologies, revolutionizing various
            aspects of our lives. From virtual assistants on our smartphones to
            self-driving cars on our roads, AI is reshaping industries and
            driving innovation across the globe. However, for many people, the
            concept of AI remains shrouded in mystery and confusion. In this
            comprehensive guide, we'll delve deep into the fundamentals of AI,
            demystifying its key components, applications, and implications.
          </p>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Understanding Artificial Intelligence
            </h3>
            <p>
              At its core, AI refers to the simulation of human intelligence
              processes by machines, particularly computer systems. Unlike
              traditional computer programs that rely on predefined rules and
              instructions, AI systems are capable of learning from data,
              identifying patterns, and making decisions with minimal human
              intervention. This ability to learn and adapt is what
              distinguishes AI from conventional software.
            </p>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Types of Artificial Intelligence
            </h3>
            <p className="text-[14px] font-[600] my-1">
              AI can be broadly categorized into two main types: Narrow AI (Weak
              AI) and General AI (Strong AI).
            </p>
          </div>
          <div>
            <ul>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Healthcare :
                </span>
                AI is revolutionizing healthcare with applications such as
                medical imaging analysis, personalized treatment
                recommendations, and predictive analytics for disease diagnosis
                and prevention.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2"> Finance :</span>{" "}
                In the financial sector, AI is used for fraud detection,
                algorithmic trading, credit scoring, and customer service
                automation
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Transportation :
                </span>
                : Self-driving cars and autonomous drones are examples of
                AI-driven innovations in transportation, aimed at improving
                safety, efficiency, and sustainability.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">Retail :</span> AI
                powers recommendation engines, demand forecasting models, and
                chatbots in retail, enhancing customer experience and driving
                sales.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  {" "}
                  Manufacturing :
                </span>{" "}
                AI-driven robotics and automation are transforming manufacturing
                processes, increasing productivity, and enabling greater
                flexibility and customization
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  {" "}
                  Ethical Considerations and Challenges :
                </span>{" "}
                AI is revolutionizing healthcare with applications such as
                medical imaging analysis, personalized treatment
                recommendations, and predictive analytics for disease diagnosis
                and prevention.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Bias and Fairness :
                </span>{" "}
                AI systems can inherit biases from the data they are trained on,
                leading to unfair or discriminatory outcomes, particularly in
                areas like hiring, lending, and criminal justice.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Privacy and Security :
                </span>
                The widespread use of AI raises concerns about data privacy and
                security, as AI systems often rely on large volumes of personal
                data for training and operation.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Job Displacement :
                </span>
                Automation driven by AI has the potential to disrupt labor
                markets and lead to job displacement, particularly in industries
                with routine or repetitive tasks.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl my-2 font-[800]">Conclusion</h3>
            <p>
              In conclusion, Artificial Intelligence is a transformative
              technology with far-reaching implications for society, economy,
              and humanity as a whole. By understanding the basics of AI, its
              key components, applications, and ethical considerations, we can
              harness its potential for positive impact while mitigating risks
              and challenges. As AI continues to evolve and advance, it is
              essential to foster dialogue, collaboration, and responsible
              stewardship to ensure that AI serves the greater good and benefits
              humanity in meaningful ways.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      imgLink: GenuisBoy,
      title:
        "The Impact of AI on Everyday Life: From Virtual Assistants to Autonomous Vehicles",
      content: (
        <div>
          <p>
            In today's rapidly evolving technological landscape, Artificial
            Intelligence (AI) has become an integral part of our daily lives,
            influencing how we work, communicate, and interact with the world
            around us. Let's delve into the diverse ways in which AI is
            impacting our daily routines, driving innovation, and shaping the
            future of society
          </p>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Virtual Assistants: Personalized Convenience at Your Fingertips
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Natural Language Understanding :
                </span>
                Virtual assistants like Siri, Alexa, and Google Assistant
                leverage sophisticated AI algorithms to comprehend and respond
                to natural language commands. By analyzing speech patterns and
                contextual cues, these AI-powered assistants can understand user
                queries and provide relevant information or perform tasks.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2"> Finance :</span>{" "}
                In the financial sector, AI is used for fraud detection,
                algorithmic trading, credit scoring, and customer service
                automation
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Task Automation :
                </span>
                Virtual assistants streamline everyday tasks and activities by
                automating processes such as setting reminders, scheduling
                appointments, and managing to-do lists. This automation enhances
                productivity and efficiency, allowing users to focus on more
                meaningful endeavors
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Smart Home Integration :
                </span>{" "}
                AI-enabled virtual assistants seamlessly integrate with smart
                home devices and appliances, enabling users to control lights,
                thermostats, security cameras, and other connected devices
                through voice commands or smartphone apps. This integration
                creates personalized and responsive living spaces tailored to
                individual preferences.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Smart Home Automation: Creating Intelligent Living Spaces
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Sensor Data Analysis :
                </span>
                Smart home systems leverage AI algorithms to analyze data from
                sensors embedded in devices and appliances. By monitoring
                factors such as temperature, humidity, occupancy, and energy
                consumption, these systems gain insights into users' habits and
                preferences.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Adaptive Automation :
                </span>{" "}
                Based on the analysis of sensor data and user interactions,
                smart home systems adapt and optimize settings to enhance
                comfort, convenience, and energy efficiency. For example, a
                smart thermostat can learn users' temperature preferences and
                adjust heating or cooling schedules accordingly
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Enhanced Security :
                </span>
                AI-powered security systems utilize facial recognition, motion
                detection, and anomaly detection algorithms to identify
                potential threats and unauthorized access. By alerting users to
                suspicious activities and providing real-time monitoring, these
                systems enhance home security and peace of mind.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Autonomous Vehicles: Redefining Transportation and Mobility
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Sensor Fusion :
                </span>
                Autonomous vehicles rely on a combination of sensors, including
                cameras, LiDAR, radar, and GPS, to perceive and interpret their
                surroundings. AI algorithms process data from these sensors to
                detect objects, predict trajectories, and make driving decisions
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Machine Learning :
                </span>{" "}
                Machine learning algorithms enable autonomous vehicles to learn
                from experience and improve their driving performance over time.
                By analyzing vast amounts of data collected from real-world
                driving scenarios, these algorithms refine decision-making and
                enhance safety
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Safety and Efficiency :
                </span>
                Autonomous vehicles have the potential to significantly reduce
                accidents and fatalities by eliminating human error and
                improving reaction times. Moreover, self-driving cars can
                optimize traffic flow, reduce congestion, and minimize
                environmental impact through efficient route planning and
                vehicle coordination.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Personalized Recommendations: Enhancing Consumer Experiences
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Data Analytics:
                </span>
                AI-driven recommendation engines analyze vast amounts of user
                data, including browsing history, purchase behavior, and
                demographic information, to generate personalized
                recommendations. By identifying patterns and preferences, these
                algorithms deliver relevant and engaging content or product
                suggestions.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  User Engagement :
                </span>{" "}
                Personalized recommendations enhance user engagement and
                satisfaction by presenting tailored content or products that
                align with individual interests and preferences. This targeted
                approach increases the likelihood of conversion and fosters
                customer loyalty.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Content Discovery :
                </span>
                AI-powered recommendation systems enable users to discover new
                content, products, or services that they may not have
                encountered otherwise. By surfacing relevant and diverse
                options, these systems enrich the user experience and encourage
                exploration.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl my-2 font-[800]">Conclusion</h3>
            <p>
              The impact of AI on everyday life is profound and multifaceted,
              encompassing a wide range of applications and domains. From the
              convenience of virtual assistants to the transformative potential
              of autonomous vehicles, AI-driven technologies are reshaping how
              we live, work, and interact with the world around us. By
              harnessing the power of AI for positive outcomes and human-centric
              innovation, we can unlock new possibilities and create a future
              where technology serves the greater good and enriches the lives of
              people worldwide.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      imgLink: GenuisBoy,
      title: "Ethical Considerations in AI Development and Deployment",
      content: (
        <div>
          <p>
            Artificial Intelligence (AI) holds tremendous promise for advancing
            society, driving innovation, and improving quality of life. However,
            as AI technologies become increasingly integrated into various
            aspects of daily life, it is essential to address the ethical
            considerations and challenges that accompany their development and
            deployment. In this comprehensive exploration, we'll delve into the
            ethical implications of AI, examining key issues such as bias,
            privacy, accountability, and transparency.
          </p>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Understanding Ethical Considerations in AI
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Bias and Fairness :
                </span>
                AI systems can inherit biases from the data they are trained on,
                leading to unfair or discriminatory outcomes, particularly in
                areas like hiring, lending, and criminal justice. Addressing
                bias in AI requires careful data collection, algorithm design,
                and validation processes to ensure equitable outcomes for all
                individuals.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Privacy and Data Security :
                </span>{" "}
                AI technologies often rely on large volumes of personal data for
                training and operation, raising concerns about data privacy and
                security. Protecting sensitive information and ensuring user
                consent are paramount to building trust and maintaining ethical
                standards in AI applications.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Accountability and Transparency :
                </span>
                AI algorithms can be complex and opaque, making it challenging
                to understand how decisions are made and hold accountable for
                their actions. Establishing mechanisms for transparency,
                explainability, and accountability is crucial for ensuring that
                AI systems operate ethically and responsibly
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Addressing Bias and Fairness in AI
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Data Collection and Representation :
                </span>
                Ensuring diverse and representative datasets is essential for
                mitigating bias in AI systems. Data collection efforts should
                encompass a wide range of demographic groups and perspectives to
                avoid perpetuating existing biases or underrepresentation.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Algorithmic Fairness :
                </span>{" "}
                Designing algorithms that prioritize fairness and mitigate bias
                requires careful attention to model selection, feature
                engineering, and evaluation metrics. Techniques such as
                fairness-aware learning and bias mitigation strategies can help
                promote equitable outcomes in AI applications.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Ethical Review and Oversight :
                </span>
                Establishing ethical review boards and oversight mechanisms can
                provide independent scrutiny and guidance on AI projects. These
                bodies can assess potential ethical implications, evaluate risks
                and benefits, and recommend strategies for mitigating bias and
                promoting fairness.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Safeguarding Privacy and Data Security
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Data Minimization and Anonymization :
                </span>
                Minimizing the collection and retention of personal data and
                anonymizing data whenever possible can help mitigate privacy
                risks in AI applications. Adopting privacy-enhancing
                technologies such as differential privacy and federated learning
                can further protect sensitive information while enabling
                valuable insights to be gleaned from data.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  User Consent and Control :
                </span>{" "}
                Respecting user consent and empowering individuals to control
                their data are essential principles of ethical AI. Providing
                clear and transparent information about data collection
                practices, purposes, and rights ensures that users can make
                informed decisions about their data usage and privacy
                preferences.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Secure Data Handling Practices :
                </span>
                Implementing robust data security measures, including
                encryption, access controls, and secure data storage, is
                essential for safeguarding against data breaches and
                unauthorized access. Regular security audits and compliance with
                data protection regulations help ensure that AI systems adhere
                to the highest standards of privacy and security.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Promoting Accountability and Transparency
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Explainable AI (XAI) :
                </span>
                Developing AI systems that are transparent and explainable
                facilitates understanding and trust among users and
                stakeholders. Techniques such as model interpretability,
                algorithmic transparency, and post-hoc explanations enable users
                to understand how AI decisions are made and assess their
                reliability and fairness
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Algorithmic Audits and Impact Assessments :
                </span>{" "}
                Conducting regular audits and impact assessments of AI systems
                can identify potential biases, errors, or unintended
                consequences. These assessments help ensure accountability and
                enable corrective actions to be taken to address ethical
                concerns and improve system performance
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Regulatory and Legal Frameworks :
                </span>
                Establishing clear regulatory frameworks and legal standards for
                AI development and deployment can provide guidance and
                accountability for ethical AI practices. Regulations such as the
                General Data Protection Regulation (GDPR) and guidelines such as
                the AI Ethics Guidelines by professional organizations help
                promote responsible AI governance and compliance.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl my-2 font-[800]">Conclusion</h3>
            <p>
              In conclusion, addressing the ethical considerations in AI
              development and deployment is essential for realizing the full
              potential of AI technologies while minimizing risks and ensuring
              societal benefit. By prioritizing fairness, privacy,
              accountability, and transparency in AI applications, we can build
              trust, foster inclusivity, and uphold ethical standards in the
              development and use of AI systems. Collaboration among
              researchers, practitioners, policymakers, and stakeholders is
              crucial for advancing ethical AI principles and creating a future
              where AI serves the greater good and enhances human well-being.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      imgLink: GenuisBoy,
      title:
        "AI and Healthcare: Revolutionizing Diagnosis, Treatment, and Patient Care",
      content: (
        <div>
          <p>
            Artificial Intelligence (AI) is poised to revolutionize the
            healthcare industry, offering unprecedented opportunities to improve
            patient outcomes, enhance diagnostic accuracy, and optimize
            treatment strategies. In this comprehensive exploration, we'll delve
            into the transformative potential of AI in healthcare, examining its
            applications across various domains, from medical imaging analysis
            to personalized treatment recommendations
          </p>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Enhancing Medical Imaging Analysis with AI
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Image Recognition and Interpretation :
                </span>
                AI algorithms trained on vast datasets of medical images, such
                as X-rays, MRIs, and CT scans, can accurately detect and analyze
                abnormalities, tumors, and other pathological conditions. By
                assisting radiologists in interpreting complex images, AI
                enhances diagnostic accuracy and efficiency, leading to earlier
                detection and intervention.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Predictive Analytics and Risk Assessment :
                </span>{" "}
                AI-powered predictive models leverage patient data, including
                medical history, genetic markers, and imaging findings, to
                assess disease risk, predict prognosis, and guide treatment
                decisions. These models enable personalized risk stratification
                and intervention strategies tailored to individual patient
                profiles, optimizing healthcare delivery and resource allocation
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Automating Routine Tasks :
                </span>
                AI-enabled automation streamlines routine administrative tasks,
                such as medical coding, documentation, and scheduling, freeing
                up healthcare professionals to focus on patient care. By
                reducing administrative burden and improving workflow
                efficiency, AI enhances productivity and mitigates burnout among
                healthcare providers.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Personalized Treatment Recommendations and Precision Medicine
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Genomic Analysis and Precision Oncology :
                </span>
                AI-driven genomic analysis enables the identification of genetic
                mutations and biomarkers associated with cancer susceptibility
                and treatment response. By analyzing vast genomic datasets and
                clinical outcomes, AI facilitates personalized treatment
                recommendations, including targeted therapies and immunotherapy,
                tailored to the molecular profile of each patient's tumor.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Drug Discovery and Development :
                </span>{" "}
                AI accelerates drug discovery and development processes by
                leveraging predictive modeling, virtual screening, and molecular
                simulations. AI algorithms analyze large-scale molecular data,
                identify potential drug targets, and optimize drug candidates,
                leading to the expedited discovery of novel therapeutics and
                treatments for various diseases.
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Clinical Decision Support Systems :
                </span>
                AI-powered clinical decision support systems integrate patient
                data, clinical guidelines, and evidence-based practices to
                assist healthcare providers in making informed treatment
                decisions. These systems provide real-time recommendations,
                alerts, and insights based on patient-specific information,
                enhancing clinical decision-making and patient safety.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 font-[800] text-[24px] my-1">
              Telemedicine and Remote Patient Monitoring
            </h3>
            <ul className="list-disc px-10">
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Remote Diagnostics and Consultations :
                </span>
                AI-enabled telemedicine platforms enable remote diagnostics,
                consultations, and monitoring, bridging geographical barriers
                and expanding access to healthcare services. Through video
                consultations, chatbots, and remote monitoring devices, patients
                can receive timely medical advice, follow-up care, and support
                from healthcare providers, improving healthcare access and
                patient satisfaction
              </li>
              <li className="text-[16px] my-3">
                <span className="text-[18px] font-[700] pr-2">
                  Predictive Analytics for Preventive Care :
                </span>{" "}
                AI-driven predictive analytics identify individuals at high risk
                of developing chronic diseases or complications, allowing for
                early intervention and preventive measures. By analyzing
                electronic health records, lifestyle data, and behavioral
                patterns, AI models predict disease progression, recommend
                lifestyle modifications, and promote proactive healthcare
                management, ultimately reducing healthcare costs and improving
                population health outcomes.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl my-2 font-[800]">Conclusion</h3>
            <p>
              In conclusion, AI is revolutionizing healthcare delivery,
              diagnosis, treatment, and patient care, ushering in a new era of
              personalized and precision medicine. By leveraging AI-driven
              technologies, healthcare providers can enhance diagnostic
              accuracy, optimize treatment strategies, and improve patient
              outcomes across diverse clinical specialties. However, realizing
              the full potential of AI in healthcare requires addressing
              challenges related to data privacy, regulatory compliance, and
              ethical considerations. Through collaborative efforts among
              researchers, clinicians, policymakers, and industry stakeholders,
              we can harness the transformative power of AI to advance
              healthcare innovation, improve population health, and enhance the
              well-being of individuals worldwide.
            </p>
          </div>
        </div>
      ),
    },
  ];

  // Find the blog post with the matching ID
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  // If no blog post is found, display a message
  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-2">
        <div className="w-full md:w-[800px] shadow-lg mx-auto my-10 p-4 border border-slate-800 rounded-lg">
          <div className="w-full h-[400px] md:h-[600px]">
            <img
              src={blogPost.imgLink}
              alt="images"
              className="w-full rounded-md h-full"
            />
          </div>
          <div className="w-full">
            <h2 className="text-slate-800 p-3 text-[25px] md:text-[40px] font-[700]">
              {blogPost.title}
            </h2>
            <div className="text-slate-800 p-3 text-sm font-[300] leading-7">
              {blogPost.content}
            </div>
          </div>
        </div>
      </div>
      {/* Display related blogs */}
      <h3 className="text-[25px] md:text-[35px] font-semibold text-center">
        Related Blogs
      </h3>
      <div className="w-full md:w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10  mx-auto my-10 p-4 rounded-lg">
        <BlogContainer visibleCount={4} currentBlogId={parseInt(id)} />
      </div>
      <Footer />
    </div>
  );
}

export default Singlepost;
