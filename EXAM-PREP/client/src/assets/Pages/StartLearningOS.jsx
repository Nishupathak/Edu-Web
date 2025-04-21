/* eslint-disable react/no-unescaped-entities */
import "../../css/pages/StartLearning.css";
import "../../css/component/SideBar.css";
import OS1 from "../images/Subjects/OS1.png";
import er1 from "../images/Subjects/er1.png";
import er2 from "../images/Subjects/er2.png";
import er3 from "../images/Subjects/er3.png";
import er4 from "../images/Subjects/er4.png";
import er5 from "../images/Subjects/er5.png";
import er6 from "../images/Subjects/er6.png";
import er7 from "../images/Subjects/er7.png";
import rel1 from "../images/Subjects/rel1.png";
import FD1 from "../images/Subjects/FD1.png";
import NF1 from "../images/Subjects/NF1.png";


export default function StartLearning() {
  return (
    <div className="startLearning">
    
      <div className="container">
        <nav className="side-nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#dbmsTutorial">
                <i className="fas fa-tachometer-alt"></i>
                <span className="menu-text">Operating System</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#dataModelling">
                <i className="fas fa-user"></i>
                <span className="menu-text">Process Management</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#normalization">
                <i className="fas fa-play "></i>
                <span className="menu-text">Synchronization</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#transaction">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">Deadlocks</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#concurrencyControl">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">Memory Management</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#fileOrganization">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">File Management</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#videoLectures">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">Video Lectures</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contentWrapper">
        <div id="dbmsTutorial" className="tutorials">
          <h1>Operating System Tutorial</h1>
          <p>
            Operating System Tutorial provides the basic and advanced concepts
            of operating system . Our Operating system tutorial is designed for
            beginners, professionals and GATE aspirants. We have designed this
            tutorial after the completion of a deep research about every
            concept.
          </p>
          <p>
            The content is described in detailed manner and has the ability to
            answer most of your queries. The tutorial also contains the
            numerical examples based on previous year GATE questions which will
            help you to address the problems in a practical manner.
          </p>
          <p>
            Operating System can be defined as an interface between user and the
            hardware. It provides an environment to the user so that, the user
            can perform its task in convenient and efficient way.
          </p>
          <p>
            The Operating System Tutorial is divided into various parts based on
            its functions such as Process Management, Process Synchronization,
            Deadlocks and File Management.
          </p>
          <h1>Operating System Definition and Function</h1>
          <p>
            In the Computer System (comprises of Hardware and software),
            Hardware can only understand machine code (in the form of 0 and 1)
            which doesn't make any sense to a naive user.
          </p>
          <p>
            <img src={OS1} />
          </p>
          <p>
            An Operating System can be defined as an interface between user and
            hardware. It is responsible for the execution of all the processes,
            Resource Allocation, CPU management, File Management and many other
            tasks. The purpose of an operating system is to provide an
            environment in which a user can execute programs in convenient and
            efficient manner.
          </p>
        </div>
        <div id="dataModelling" className="tutorials">
          <h1>ER (Entity Relationship) Diagram in DBMS</h1>
          <p>
            <ul>
              <li>
                ER model stands for an Entity-Relationship model. It is a
                high-level data model. This model is used to define the data
                elements and relationship for a specified system.
              </li>
              <li>
                It develops a conceptual design for the database. It also
                develops a very simple and easy to design view of data.
              </li>
              <li>
                In ER modeling, the database structure is portrayed as a diagram
                called an entity-relationship diagram.
              </li>
            </ul>
          </p>
          <p>
            <b>For example, </b>Suppose we design a school database. In this
            database, the student will be an entity with attributes like
            address, name, id, age, etc. The address can be another entity with
            attributes like city, street name, pin code, etc and there will be a
            relationship between them.
          </p>
          <p>
            <img src={er1} />
          </p>
          <h2>Component of ER Diagram</h2>
          <p>
            <img src={er2} />
          </p>
          <h2>1. Entity:</h2>
          <p>
            An entity may be any object, class, person or place. In the ER
            diagram, an entity can be represented as rectangles. Consider an
            organization as an example- manager, product, employee, department
            etc. can be taken as an entity.
          </p>
          <p>
            <img src={er3} />
          </p>
          <p>
            <b>a. Weak Entity</b>
          </p>
          <p>
            An entity that depends on another entity called a weak entity. The
            weak entity doesn't contain any key attribute of its own. The weak
            entity is represented by a double rectangle.
          </p>
          <p>
            <img src={er4} />
          </p>
          <h2>2. Attribute</h2>
          <p>
            The attribute is used to describe the property of an entity. Eclipse
            is used to represent an attribute.
          </p>
          <p>
            <b>For example, </b>For example, id, age, contact number, name, etc.
            can be attributes of a student.
          </p>
          <p>
            <img src={er5} />
          </p>
          <p>
            <b>a. Key Attribute</b>
          </p>
          <p>
            The key attribute is used to represent the main characteristics of
            an entity. It represents a primary key. The key attribute is
            represented by an ellipse with the text underlined.
          </p>
          <p>
            <img src={er6} />
          </p>
          <p>
            <b>b. Composite Attribute</b>
          </p>
          <p>
            An attribute that composed of many other attributes is known as a
            composite attribute. The composite attribute is represented by an
            ellipse, and those ellipses are connected with an ellipse.
          </p>
          <p>
            <img src={er7} />
          </p>
          <h2>3. Relationship</h2>
          <p>
            A relationship is used to describe the relation between entities.
            Diamond or rhombus is used to represent the relationship.
          </p>
          <p>
            <img src={rel1} />
          </p>
          <p>Types of relationship are as follows:</p>
          <p>
            <b>a. One-to-One Relationship</b>
          </p>
          <p>
            When only one instance of an entity is associated with the
            relationship, then it is known as one to one relationship.
          </p>
          <p>
            <b>For example, </b>A female can marry to one male, and a male can
            marry to one female.
          </p>
          <p>
            <b>b. One-to-Many Relationship</b>
          </p>
          <p>
            When only one instance of the entity on the left, and more than one
            instance of an entity on the right associates with the relationship
            then this is known as a one-to-many relationship.
          </p>
          <p>
            <b>For example, </b>Scientist can invent many inventions, but the
            invention is done by the only specific scientist.
          </p>
          <p>
            <b>c. Many-to-one relationship</b>
          </p>
          <p>
            When more than one instance of the entity on the left, and only one
            instance of an entity on the right associates with the relationship
            then it is known as a many-to-one relationship.
          </p>
          <p>
            <b>For example, </b>Student enrolls for only one course, but a
            course can have many students.
          </p>
          <p>
            <b>d. Many-to-many relationship</b>
          </p>
          <p>
            When more than one instance of the entity on the left, and more than
            one instance of an entity on the right associates with the
            relationship then it is known as a many-to-many relationship.
          </p>
          <p>
            <b>For example, </b>Employee can assign by many projects and project
            can have many employees.
          </p>
        </div>
        <div id="normalization" className="tutorials">
          <h1>Functional Dependency</h1>
          <p>
            The functional dependency is a relationship that exists between two
            attributes. It typically exists between the primary key and non-key
            attribute within a table.
          </p>
          <p>
            <b>X → Y </b>{" "}
          </p>
          <p>
            The left side of FD is known as a determinant, the right side of the
            production is known as a dependent.
          </p>
          <h3>For example:</h3>
          <p>
            Assume we have an employee table with attributes: Emp_Id, Emp_Name,
            Emp_Address.
          </p>
          <p>
            Here Emp_Id attribute can uniquely identify the Emp_Name attribute
            of employee table because if we know the Emp_Id, we can tell that
            employee name associated with it.
          </p>
          <p>
            Functional dependency can be written as: <b>Emp_Id → Emp_Name </b>
          </p>
          <h1>Types of Functional dependency</h1>
          <p>
            <img src={FD1} />
          </p>
          <h2>1. Trivial functional dependency</h2>
          <p>
            <ul>
              <li>
                A → B has trivial functional dependency if B is a subset of A.
              </li>
              <li>
                The following dependencies are also trivial like: A → A, B → B
              </li>
            </ul>
          </p>
          <h2>2. Non-trivial functional dependency</h2>
          <p>
            <ul>
              <li>
                A → B has a non-trivial functional dependency if B is not a
                subset of A.
              </li>
              <li>
                When A intersection B is NULL, then A → B is called as complete
                non-trivial.
              </li>
            </ul>
          </p>
          <h1>Normalization</h1>
          <p>
            A large database defined as a single relation may result in data
            duplication. This repetition of data may result in:
          </p>
          <p>
            <ul>
              <li>Making relations very large.</li>
              <li>
                It isn't easy to maintain and update data as it would involve
                searching many records in relation.
              </li>
              <li>Wastage and poor utilization of disk space and resources.</li>
              <li>The likelihood of errors and inconsistencies increases.</li>
            </ul>
          </p>
          <p>
            So to handle these problems, we should analyze and decompose the
            relations with redundant data into smaller, simpler, and
            well-structured relations that are satisfy desirable properties.
            Normalization is a process of decomposing the relations into
            relations with fewer attributes.
          </p>
          <h1>What is Normalization?</h1>
          <p>
            <ul>
              <li>
                Normalization is the process of organizing the data in the
                database.
              </li>
              <li>
                Normalization is used to minimize the redundancy from a relation
                or set of relations. It is also used to eliminate undesirable
                characteristics like Insertion, Update, and Deletion Anomalies.
              </li>
              <li>
                Normalization divides the larger table into smaller and links
                them using relationships.
              </li>
              <li>
                The normal form is used to reduce redundancy from the database
                table.
              </li>
            </ul>
          </p>
          <h1>Types of Normal Forms:</h1>
          <p>
            Normalization works through a series of stages called Normal forms.
            The normal forms apply to individual relations. The relation is said
            to be in particular normal form if it satisfies constraints.
          </p>
          <p>
            <img src={NF1} />
          </p>
        </div>
        <div id="transaction" className="tutorials"></div>
        <div id="concurrencyControl" className="tutorials"></div>
        <div id="fileOrganization" className="tutorials"></div>
        <div id="indexing" className="tutorials"></div>
        <div id="videoLectures"></div>
      </div>
    </div>
  );
}
