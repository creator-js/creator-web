import React, {ReactNode} from "react";
import {ILine} from "@site/src/components/Editor/contents/commonLines";
import {configLines} from "@site/src/components/Editor/contents/configLines";
import {componentLines} from "@site/src/components/Editor/contents/componentLines";
import {styleLines} from "@site/src/components/Editor/contents/styleLines";
import {atomLines} from "@site/src/components/Editor/contents/atomLines";
import {serviceLines} from "@site/src/components/Editor/contents/serviceLines";
import {apiLines} from "@site/src/components/Editor/contents/apiLines";
import {moleculeLines} from "@site/src/components/Editor/contents/moleculeLines";

import ExternalLink from "@site/src/assets/icons/ExternalLink";

export interface IStep {
    text: ReactNode;
    lines: ILine[];
    file: string;
    scroll: number;
    command?: string;
    question?: string;
    answer?: string;
}

export const steps: IStep[] = [
    {
        text: <p>Begin by creating an empty <span className='hl'>creator.config.js</span> file.</p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0,
        command: 'npm install creator-js-cli --save-dev'
    },
    {
        text: <p> Set <span className="hl">src</span> as the working folder.</p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0
    },
    {
        text: <p> Add new <span className="hl">domain</span>. Domains are like buckets for questions and templates. The first question CreatorJS will ask you is "What do you want to create?". In the list of choices, there will be domain names. </p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0
    },
    {
        text: (
            <p>
                Add <span className="hl">structure</span> field to the domain. It represents a part of the folder structure, with which this particular domain will work. When CreatorJS sees structure, it asks structural questions first.
            </p>
        ),
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0
    },
    {
        text: <p>Add <span className="hl">questions</span> field to the domain to provide more details about how to create files. CreatorJS uses <a href="https://www.npmjs.com/package/inquirer" target='_blank' className='hk'>inquirer.js</a> to work with questions.</p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0
    },
    {
        text: <p>Add <span className="hl">templates</span> field to the domain. Each template define the <span className="hl">name</span> of the file that we work with, and the <span className="hl">template</span> for this file. Notice, that a name can also contain a path. </p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 230
    },
    {
        text: <p> Create a template for a component file. It exports a default function that ingests <span className="hl">answers</span> and returns an object with required <span className="hl">init</span> and optional <span className="hl">updates</span> fields. With <span className="hl">init</span> we construct a string that will represent the content of the file, and with <span className="hl">updates</span> we change it.</p>,
        lines: componentLines,
        file: 'component.js',
        scroll: 0
    },
    {
        text: <p> Create a template for a styles file. Leave the <span className="hl">init</span> field empty.</p>,
        lines: styleLines,
        file: 'style.js',
        scroll: 0
    },
    {
        text: (
            <>
                <p> We are ready to start CreatorJS. In the terminal run command <span className="hl">g</span>. If you encounter an error, try <span className="hl">./node_modules/.bin/g</span>.</p>
                <p> The initial question always asks which <span className="hl">domain</span> you want to work with. Select <span className="hl">components</span>.</p>
            </>
        ),
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'components'
    },
    {
        text: <p>Because we added <span className="hl">structure</span>, CreatorJS will first ask about where to create a file in that structure.</p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0,
        question: 'Where to create a file?',
        answer: 'components'
    },
    {
        text: (
            <>
                <p>When structural questions are answered, questions from <span className="hl">questions</span> begin.</p>
                <p>Let's name our component <span className="hl">Atom</span>.</p>
            </>
        ),
        lines: configLines,
        file: 'creator.config.js',
        scroll: 0,
        question: 'How to name the component?',
        answer: 'Atom'
    },
    {
        text: <p>Now when we answered all questions, CreatorJS creates files <span className="hl">./src/components/Atom/Atom.jsx</span> and <span className="hl">./src/components/Atom/Atom.css</span> based on what we provided in the <span className="hl">templates</span>.</p>,
        lines: atomLines,
        file: 'Atom.jsx',
        scroll: 0
    },
    {
        text: <p> Let's add another domain and call it <span className="hl">services</span>.</p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 600
    },
    {
        text: <p> Create a file <span className="hl">_templates/services/service.js</span> with a template. As we have done previously, add <span className="hl">init</span> value.</p>,
        lines: serviceLines,
        file: 'service.js',
        scroll: 0
    },
    {
        text: <p>Now add <span className="hl">updates</span> field. It has declarative syntax and describes how to update the file. It literally tells CreatorJS to scan the file from bottom to top and when the line that includes <span className="hl">&rbrace;;</span> is found, change <span className="hl">&rbrace;;</span> with what is provided in <span className="hl">changeWith</span> field.</p>,
        lines: serviceLines,
        file: 'service.js',
        scroll: 0
    },
    {
        text: <p> Let's run CreatorJS. This time we want to select <span className="hl">services</span>.</p>,
        lines: serviceLines,
        file: 'service.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'services'
    },
    {
        text: <p> Simply call it <span className="hl">getData</span>.</p>,
        lines: serviceLines,
        file: 'service.js',
        scroll: 0,
        question: 'How to name the service?',
        answer: 'getData'
    },
    {
        text: <p> The file <span className="hl">./src/services/api.js</span> was created. It contains <span className="hl">getData</span> function. Everything as expected.</p>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0,
    },
    {
        text: <p> Let's test how <span className="hl">updates</span> work. Run CreatorJS and select <span className="hl">services</span> once again. </p>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'services'
    },
    {
        text: <p> Call this service <span className="hl">getAnotherData</span>.</p>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0,
        question: 'How to name the service?',
        answer: 'getAnotherData'
    },
    {
        text: <p> The file <span className="hl">./src/services/api.js</span> was updated. It now contains both <span className="hl">getData</span> and <span className="hl">getAnotherData</span> functions.</p>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0,
    },
    {
        text: <p> Let's discover <span className="hl">domains chaining</span>. We are going to connect <span className="hl">components</span> and <span className="hl">services</span> domains. We want this connection to happen under the special condition. For that, let's first add another question to the <span className="hl">components</span> questions.</p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 90,
    },
    {
        text: <p> To connect or chain the domains, we need to add the <span className="hl">next</span> field to the domain. In the <span className="hl">name</span> field provide the name of the next domain. Use the <span className="hl">when</span> field when you want to add a chaining condition.</p>,
        lines: configLines,
        file: 'creator.config.js',
        scroll: 500,
    },
    {
        text: <p> Let's update the <span className="hl">_templates/components/component.js</span> template. </p>,
        lines: componentLines,
        file: 'component.js',
        scroll: 0,
    },
    {
        text: <p> It becomes wordy. Let me scroll a little. </p>,
        lines: componentLines,
        file: 'component.js',
        scroll: 200,
    },
    {
        text: <p> Run CreatorJS for the last time and select <span className="hl">components</span>.</p>,
        lines: componentLines,
        file: 'component.js',
        scroll: 100,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'components'
    },
    {
        text: <p>Select the only <span className="hl">components</span> folder.</p>,
        lines: componentLines,
        file: 'component.js',
        scroll: 100,
        question: 'Where to create a file?',
        answer: 'components'
    },
    {
        text: <p>Call this component <span className="hl">Molecule</span></p>,
        lines: componentLines,
        file: 'component.js',
        scroll: 100,
        question: 'How to name the component?',
        answer: 'Molecule'
    },
    {
        text: <p>And here is that one question that connects our domains.</p>,
        lines: componentLines,
        file: 'component.js',
        scroll: 100,
        question: 'Associate this component with a service?',
        answer: 'Yes'
    },
    {
        text: <p>If we answered with <span className="hl">Yes</span>, the questions from <span className="hl">services</span> domain begin. Call this service <span className="hl">getMolecules</span></p>,
        lines: componentLines,
        file: 'component.js',
        scroll: 100,
        question: 'How to name the service?',
        answer: 'getMolecules'
    },
    {
        text: <p> The file <span className="hl">./src/components/Molecules/Molecules.jsx</span> with its styles is created. We can see that there is also <span className="hl">useEffect</span> that calls our <span className="hl">getMolecules</span> service.</p>,
        lines: moleculeLines,
        file: 'Molecule.jsx',
        scroll: 0
    },
    {
        text: <p> In <span className="hl">./src/services/api.js</span> the function <span className="hl">getMolecules</span> was also added. </p>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0
    },
    {
        text: <p> With CreatorJS you can automate any workflow. It can be more complex than what we have been through moments ago. For example, you can automate the creation of a page, associated with redux, that fetches the node.js server and retrieves mock data. </p>,
        lines: apiLines,
        file: 'api.js',
        scroll: 0
    }
]
