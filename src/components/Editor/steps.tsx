import React, {ReactNode} from "react";
import {ILine} from "@site/src/components/Editor/contents/commonLines";
import {configLines} from "@site/src/components/Editor/contents/configLines";
import {componentLines} from "@site/src/components/Editor/contents/componentLines";
import {styleLines} from "@site/src/components/Editor/contents/styleLines";
import {atomLines} from "@site/src/components/Editor/contents/atomLines";
import {serviceLines} from "@site/src/components/Editor/contents/serviceLines";
import {apiLines} from "@site/src/components/Editor/contents/apiLines";
import {moleculeLines} from "@site/src/components/Editor/contents/moleculeLines";

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
        text: (
            <>
                <p>Begin by installing <span className="hl">creator-js-cli</span>.</p>
                <p> Once installed, create an empty <span className='hl'>creator.config.js</span> file. If there is no <span className="hl">type</span> field in your <span className="hl">package.json</span> or if its value is different from <span className="hl">module</span>, then create <span className='hl'>creator.config.mjs</span> instead.</p>
            </>
        ),
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 0,
        command: 'npm install creator-js-cli --save-dev'
    },
    {
        text: <p> Set <span className="hl">src</span> as a working directory. Everything will be relative to this root.</p>,
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 0
    },
    {
        text: <p> Add new <span className="hl">domain</span>. Domains are like buckets for questions and templates. The first question CreatorJS will ask you is "What do you want to create?". In the list of choices, there will be domain names. </p>,
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 0
    },
    {
        text: (
            <p>
                Add <span className="hl">structure</span> field to the domain. It represents a part of the folder structure, with which this particular domain will work. When CreatorJS sees structure, it asks structural questions first.
            </p>
        ),
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 0
    },
    {
        text: (
            <>
                <p>Add <span className="hl">questions</span> field to the domain. Questions provide more details about how to create files. CreatorJS uses <a href="https://www.npmjs.com/package/inquirer" target='_blank' className='hk'>inquirer.js</a> to work with questions.</p>
                <p>The answer to this particular question will be saved to the <span className="hl">componentName</span> field of the resulting answers object.</p>
            </>
        ),
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 0
    },
    {
        text: (
            <>
                <p>Add <span className="hl">templates</span> field to the domain. Each template define the <span className="hl">name</span> of the file that we work with, and the <span className="hl">template</span> for this file. Notice, that a name can also contain a path. </p>
                <p>Notice how we make use of answers. Access an answer by addressing </p>
                <p><span className="hl">answers</span>.<span className="hl">&lt;domain_name&gt;</span>.<span className="hl">&lt;question_name&gt;</span>.</p>
            </>
        ),
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 230
    },
    {
        text: (
            <>
                <p> Create a template for a component file. It exports a default function that ingests <span className="hl">answers</span> and returns an object with required <span className="hl">init</span> and optional <span className="hl">updates</span> fields. With <span className="hl">init</span> we construct a string that will represent the content of the file, and with <span className="hl">updates</span> we change it.</p>
                <p>We will see <span className="hl">updates</span> example later.</p>
            </>
        ),
        lines: componentLines,
        file: 't_component.js',
        scroll: 0
    },
    {
        text: (
            <>
                <p> Create a template for a styles file. Leave the <span className="hl">init</span> field empty.</p>
                <p> By the way, for the template files, the <span className="hl">.mjs</span> rule also applies.</p>
            </>
        ),
        lines: styleLines,
        file: 't_style.js',
        scroll: 0
    },
    {
        text: (
            <>
                <p> We are ready to start CreatorJS. In the terminal run command <span className="hl">g</span>. If you encounter an error, try <span className="hl">./node_modules/.bin/g</span>.</p>
                <p> The initial question always asks which <span className="hl">domain</span> you want to work with. Select <span className="hl">components</span>.</p>
            </>
        ),
        lines: styleLines,
        file: 't_style.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'components'
    },
    {
        text: <p>Because we added <span className="hl">structure</span>, CreatorJS will first ask where to create a file in that structure.</p>,
        lines: styleLines,
        file: 't_style.js',
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
        lines: styleLines,
        file: 't_style.js',
        scroll: 0,
        question: 'How to name the component?',
        answer: 'Atom'
    },
    {
        text: <p>Now when we answered all questions, CreatorJS creates files <span className="hl">./src/components/Atom/Atom.jsx</span> and <span className="hl">./src/components/Atom/Atom.css</span> based on what we provided in the <span className="hl">templates</span>.</p>,
        lines: atomLines,
        file: 'f_atom.jsx',
        scroll: 0
    },
    {
        text: <p> Let's add another domain and call it <span className="hl">services</span>.</p>,
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 600
    },
    {
        text: <p> Create a file <span className="hl">_templates/services/service.js</span>. As we have done previously, add <span className="hl">init</span> value.</p>,
        lines: serviceLines,
        file: 't_service.js',
        scroll: 0
    },
    {
        text: <p>Now add the <span className="hl">updates</span> field. It has declarative syntax and describes how to update the file. It literally tells CreatorJS to scan the file from bottom to top and when the line that includes <span className="hl">&#125;;</span> is found, change <span className="hl">&#125;;</span> with what is provided in the <span className="hl">changeWith</span> field.</p>,
        lines: serviceLines,
        file: 't_service.js',
        scroll: 0
    },
    {
        text: <p> Let's run CreatorJS. This time we want to select <span className="hl">services</span>.</p>,
        lines: serviceLines,
        file: 't_service.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'services'
    },
    {
        text: <p> Simply call it <span className="hl">getData</span>.</p>,
        lines: serviceLines,
        file: 't_service.js',
        scroll: 0,
        question: 'How to name the service?',
        answer: 'getData'
    },
    {
        text: <p> The file <span className="hl">./src/services/service.js</span> was created. It contains <span className="hl">getData</span> function. Everything as expected.</p>,
        lines: apiLines,
        file: 'f_service.js',
        scroll: 0,
    },
    {
        text: <p> Let's test how <span className="hl">updates</span> work. Run CreatorJS and select <span className="hl">services</span> once again. </p>,
        lines: apiLines,
        file: 'f_service.js',
        scroll: 0,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'services'
    },
    {
        text: <p> Call this service <span className="hl">getAnotherData</span>.</p>,
        lines: apiLines,
        file: 'f_service.js',
        scroll: 0,
        question: 'How to name the service?',
        answer: 'getAnotherData'
    },
    {
        text: <p> The file <span className="hl">./src/services/service.js</span> was updated. It now contains both <span className="hl">getData</span> and <span className="hl">getAnotherData</span> functions.</p>,
        lines: apiLines,
        file: 'f_service.js',
        scroll: 0,
    },
    {
        text: <p> Let's discover <span className="hl">domains chaining</span>. We are going to chain <span className="hl">components</span> and <span className="hl">services</span> domains. We want chaining to happen under the special condition. For that, let's first add another question to the <span className="hl">components</span> questions.</p>,
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 90,
    },
    {
        text: <p> To chain the domains, we need to add the <span className="hl">next</span> field to the first domain. In the <span className="hl">name</span> field provide the name of the next domain. Use the <span className="hl">when</span> field when you want to add a chaining condition.</p>,
        lines: configLines,
        file: 'f_creator.config.js',
        scroll: 500,
    },
    {
        text: <p> Let's update the <span className="hl">_templates/components/component.js</span> template. </p>,
        lines: componentLines,
        file: 't_component.js',
        scroll: 0,
    },
    {
        text: <p> It becomes wordy. Let me scroll a little. </p>,
        lines: componentLines,
        file: 't_component.js',
        scroll: 200,
    },
    {
        text: <p> Run CreatorJS for the last time and select <span className="hl">components</span>.</p>,
        lines: componentLines,
        file: 't_component.js',
        scroll: 200,
        command: 'g',
        question: 'What do you want to create?',
        answer: 'components'
    },
    {
        text: <p>Select the only <span className="hl">components</span> folder from the structural questions.</p>,
        lines: componentLines,
        file: 't_component.js',
        scroll: 200,
        question: 'Where to create a file?',
        answer: 'components'
    },
    {
        text: <p>Call this component <span className="hl">Molecule</span></p>,
        lines: componentLines,
        file: 't_component.js',
        scroll: 200,
        question: 'How to name the component?',
        answer: 'Molecule'
    },
    {
        text: <p>And here is that one question that connects our domains.</p>,
        lines: componentLines,
        file: 't_component.js',
        scroll: 200,
        question: 'Associate this component with a service?',
        answer: 'Yes'
    },
    {
        text: <p>If we answered with <span className="hl">Yes</span>, the questions from <span className="hl">services</span> domain begin. Call this service <span className="hl">getMolecules</span></p>,
        lines: componentLines,
        file: 't_component.js',
        scroll: 200,
        question: 'How to name the service?',
        answer: 'getMolecules'
    },
    {
        text: <p> The file <span className="hl">./src/components/Molecule/Molecule.jsx</span> with its styles is created. We can see that there is also <span className="hl">useEffect</span> that calls our <span className="hl">getMolecules</span> service.</p>,
        lines: moleculeLines,
        file: 'f_molecule.jsx',
        scroll: 0
    },
    {
        text: <p> In <span className="hl">./src/services/service.js</span> the function <span className="hl">getMolecules</span> was also added. </p>,
        lines: apiLines,
        file: 'f_service.js',
        scroll: 0
    },
    {
        text: <p> With CreatorJS you can automate any workflow. It can be more complex than what we have been through moments ago. For example, you can automate the creation of a page, associated with redux, that fetches the node.js server and retrieves mock data. Search for patterns in your workflow and try to automate them. </p>,
        lines: apiLines,
        file: 'f_service.js',
        scroll: 0
    }
]
