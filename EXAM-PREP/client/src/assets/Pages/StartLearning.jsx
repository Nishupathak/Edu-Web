/* eslint-disable react/no-unescaped-entities */
import "../../css/pages/StartLearning.css";
import "../../css/component/SideBar.css";
import table1 from "../images/Subjects/dbmsTable.png";
import threeLevelArch from "../images/Subjects/ThreemodelArchitechture.png";
import view1 from "../images/Subjects/internalView.png";
import view2 from "../images/Subjects/conceptualView.png";
import view3 from "../images/Subjects/externalView.png";
import acid from "../images/Subjects/ACID.png";
import atom1 from "../images/Subjects/Atomicity.png";
import atom2 from "../images/Subjects/Atomicity2.png";
import cons from "../images/Subjects/consistency.png";
import isolation from "../images/Subjects/islolation.png";
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
                <span className="menu-text">DBMS Tutorial</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#dataModelling">
                <i className="fas fa-user"></i>
                <span className="menu-text">Data Modeling</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#normalization">
                <i className="fas fa-play "></i>
                <span className="menu-text">Normalization</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#transaction">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">Transaction</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#concurrencyControl">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">Concurrency Control</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#fileOrganization">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">File Organization</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#indexing">
                <i className="fas fa-sign-out-alt"></i>
                <span className="menu-text">Indexing</span>
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
          <h1>DBMS Tutorial</h1>
          <p>
            DBMS Tutorial provides basic and advanced concepts of Database. Our
            DBMS Tutorial is designed for beginners and professionals both.
            Database management system is software that is used to manage the
            database. Our DBMS Tutorial includes all topics of DBMS such as
            introduction, ER model, keys, relational model, join operation, SQL,
            functional dependency, transaction, concurrency control, etc.
          </p>
          <h2>What is Database</h2>
          <p>
            he database is a collection of inter-related data which is used to
            retrieve, insert and delete the data efficiently. It is also used to
            organize the data in the form of a table, schema, views, and
            reports, etc.
          </p>
          <p>
            For example: The college Database organizes the data about the
            admin, staff, students and faculty etc. Using the database, you can
            easily retrieve, insert, and delete the information.
          </p>
          <h2>Database Management System</h2>
          <p>
            <ul>
              <li>
                Database management system is a software which is used to manage
                the database. For example: MySQL, Oracle, etc are a very popular
                commercial database which is used in different applications.
              </li>
              <li>
                DBMS provides an interface to perform various operations like
                database creation, storing data in it, updating data, creating a
                table in the database and a lot more.
              </li>
              <li>
                It provides protection and security to the database. In the case
                of multiple users, it also maintains data consistency.
              </li>
            </ul>
          </p>
          <h4>DBMS allows users the following tasks:</h4>
          <p>
            <ul>
              <li>
                Data Definition: It is used for creation, modification, and
                removal of definition that defines the organization of data in
                the database.
              </li>
              <li>
                Data Updation: It is used for the insertion, modification, and
                deletion of the actual data in the database.
              </li>
              <li>
                Data Retrieval: It is used to retrieve the data from the
                database which can be used by applications for various purposes.
              </li>
              <li>
                User Administration: It is used for registering and monitoring
                users, maintain data integrity, enforcing data security, dealing
                with concurrency control, monitoring performance and recovering
                information corrupted by unexpected failure.
              </li>
            </ul>
          </p>
          <h2>Characteristics of DBMS</h2>
          <p>
            <ul>
              <l1>
                It uses a digital repository established on a server to store
                and manage the information.
              </l1>
              <l1>
                It can provide a clear and logical view of the process that
                manipulates data.
              </l1>
              <l1>DBMS contains automatic backup and recovery procedures.</l1>
              <l1>
                It contains ACID properties which maintain data in a healthy
                state in case of failure.
              </l1>
              <l1>It can reduce the complex relationship between data.</l1>
              <l1>
                It is used to support manipulation and processing of data.
              </l1>
              <li>It is used to provide security of data.</li>
              <li>
                It can view the database from different viewpoints according to
                the requirements of the user.
              </li>
            </ul>
          </p>
          <h1>What is RDBMS (Relational Database Management System)</h1>
          <p>
            All modern database management systems like SQL, MS SQL Server, IBM
            DB2, ORACLE, My-SQL, and Microsoft Access are based on RDBMS. It is
            called Relational Database Management System (RDBMS) because it is
            based on the relational model introduced by E.F. Codd.
          </p>
          <h2>What is table/Relation?</h2>
          <p>
            Everything in a relational database is stored in the form of
            relations. The RDBMS database uses tables to store data. A table is
            a collection of related data entries and contains rows and columns
            to store data. Each table represents some real-world objects such as
            person, place, or event about which information is collected. The
            organized collection of data into a relational table is known as the
            logical view of the database.
          </p>
          <h4>Properties of a Relation:</h4>
          <p>
            <ul>
              <li>
                Each relation has a unique name by which it is identified in the
                database.
              </li>
              <li>Relation does not contain duplicate tuples.</li>
              <li>The tuples of a relation have no specific order</li>
              <li>
                All attributes in a relation are atomic, i.e., each cell of a
                relation contains exactly one value.
              </li>
            </ul>
            <img src={table1} style={{ marginTop: "20px" }} />
          </p>
          <h2>What is a row or record?</h2>
          <p>
            A row of a table is also called a record or tuple. It contains the
            specific information of each entry in the table. It is a horizontal
            entity in the table. For example, The above table contains 5
            records.
          </p>
          <h4>Properties of a row:</h4>
          <p>
            <ul>
              <li>
                No two tuples are identical to each other in all their entries.
              </li>
              <li>
                All tuples of the relation have the same format and the same
                number of entries.
              </li>
              <li>
                The order of the tuple is irrelevant. They are identified by
                their content, not by their position.
              </li>
            </ul>
          </p>
          <h2>What is a column/attribute?</h2>
          <p>
            A column is a vertical entity in the table which contains all
            information associated with a specific field in a table. For
            example, "name" is a column in the above table which contains all
            information about a student's name
          </p>
          <h4>Properties of an Attribute:</h4>
          <p>
            <ul>
              <li>Every attribute of a relation must have a name.</li>
              <li>Null values are permitted for the attributes.</li>
              <li>
                Default values can be specified for an attribute automatically
                inserted if no other value is specified for an attribute.
              </li>
            </ul>
          </p>
          <h1>Three schema Architecture</h1>
          <p>
            <ul>
              <li>Three schema Architecture</li>
              <li>
                This framework is used to describe the structure of a specific
                database system.
              </li>
              <li>
                The three schema architecture is also used to separate the user
                applications and physical database.
              </li>
              <li>
                The three schema architecture contains three-levels. It breaks
                the database down into three different categories.
              </li>
            </ul>
            <img src={threeLevelArch} style={{ marginTop: "20px" }} />
          </p>
          <h4>In the above diagram:</h4>
          <p>
            <ul>
              <li>It shows the DBMS architecture.</li>
              <li>
                Mapping is used to transform the request and response between
                various database levels of architecture.
              </li>
              <li>
                Mapping is not good for small DBMS because it takes more time.
              </li>
              <li>
                In External / Conceptual mapping, it is necessary to transform
                the request from external level to conceptual schema.
              </li>
              <li>
                In Conceptual / Internal mapping, DBMS transform the request
                from the conceptual to internal level.
              </li>
            </ul>
          </p>
          <h1>Objectives of Three schema Architecture</h1>
          <p>
            The main objective of three level architecture is to enable multiple
            users to access the same data with a personalized view while storing
            the underlying data only once. Thus it separates the user's view
            from the physical structure of the database. This separation is
            desirable for the following reasons:
          </p>
          <p>
            <ul>
              <li>Different users need different views of the same data.</li>
              <li>
                The approach in which a particular user needs to see the data
                may change over time.
              </li>
              <li>
                The users of the database should not worry about the physical
                implementation and internal workings of the database such as
                data compression and encryption techniques, hashing,
                optimization of the internal structures etc.
              </li>
              <li>
                All users should be able to access the same data according to
                their requirements.
              </li>
              <li>
                DBA should be able to change the conceptual structure of the
                database without affecting the user's
              </li>
              <li>
                Internal structure of the database should be unaffected by
                changes to physical aspects of the storage.
              </li>
            </ul>
          </p>
          <h2>1. Internal Level</h2>
          <p>
            <img src={view1} />
            <ul>
              <li>
                The internal level has an internal schema which describes the
                physical storage structure of the database.
              </li>
              <li>The internal schema is also known as a physical schema.</li>
              <li>
                It uses the physical data model. It is used to define that how
                the data will be stored in a block.
              </li>
              <li>
                The physical level is used to describe complex low-level data
                structures in detail.
              </li>
            </ul>
          </p>
          <h2>2. Conceptual Level</h2>
          <p>
            <img src={view2} />
            <ul>
              <li>
                The conceptual schema describes the design of a database at the
                conceptual level. Conceptual level is also known as logical
                level.
              </li>
              <li>
                The conceptual schema describes the structure of the whole
                database.
              </li>
              <li>
                The conceptual level describes what data are to be stored in the
                database and also describes what relationship exists among those
                data.
              </li>
              <li>
                In the conceptual level, internal details such as an
                implementation of the data structure are hidden.
              </li>
            </ul>
          </p>
          <h2>3. External Level</h2>
          <p>
            <img src={view3} />
            <ul>
              <li>
                At the external level, a database contains several schemas that
                sometimes called as subschema. The subschema is used to describe
                the different view of the database.
              </li>
              <li>An external schema is also known as view schema.</li>
              <li>
                Each view schema describes the database part that a particular
                user group is interested and hides the remaining database from
                that user group.
              </li>
              <li>
                The view schema describes the end user interaction with database
                systems.
              </li>
            </ul>
          </p>
          <h1>ACID Properties in DBMS</h1>
          <p>
            DBMS is the management of data that should remain integrated when
            any changes are done in it. It is because if the integrity of the
            data is affected, whole data will get disturbed and corrupted.
            Therefore, to maintain the integrity of the data, there are four
            properties described in the database management system, which are
            known as the ACID properties. The ACID properties are meant for the
            transaction that goes through a different group of tasks, and there
            we come to see the role of the ACID properties.
          </p>
          <p>
            In this section, we will learn and understand about the ACID
            properties. We will learn what these properties stand for and what
            does each property is used for. We will also understand the ACID
            properties with the help of some examples.
          </p>
          <h2>ACID Properties</h2>
          <p>The expansion of the term ACID defines for:</p>
          <p>
            <img src={acid} />
          </p>
          <h2>1. Atomicity</h2>
          <p>
            The term atomicity defines that the data remains atomic. It means if
            any operation is performed on the data, either it should be
            performed or executed completely or should not be executed at all.
            It further means that the operation should not break in between or
            execute partially. In the case of executing operations on the
            transaction, the operation should be completely executed and not
            partially.
          </p>
          <p>
            <b>Example: </b>If Remo has account A having $30 in his account from
            which he wishes to send $10 to Sheero's account, which is B. In
            account B, a sum of $ 100 is already present. When $10 will be
            transferred to account B, the sum will become $110. Now, there will
            be two operations that will take place. One is the amount of $10
            that Remo wants to transfer will be debited from his account A, and
            the same amount will get credited to account B, i.e., into Sheero's
            account. Now, what happens - the first operation of debit executes
            successfully, but the credit operation, however, fails. Thus, in
            Remo's account A, the value becomes $20, and to that of Sheero's
            account, it remains $100 as it was previously present.
          </p>
          <p>
            <img src={atom1} />
          </p>
          <p>
            In the above diagram, it can be seen that after crediting $10, the
            amount is still $100 in account B. So, it is not an atomic
            transaction.
          </p>
          <p>
            The below image shows that both debit and credit operations are done
            successfully. Thus the transaction is atomic.
          </p>
          <p>
            <img src={atom2} />
          </p>
          <h2>2. Consistency</h2>
          <p>
            The word consistency means that the value should remain preserved
            always. In DBMS, the integrity of the data should be maintained,
            which means if a change in the database is made, it should remain
            preserved always. In the case of transactions, the integrity of the
            data is very essential so that the database remains consistent
            before and after the transaction. The data should always be correct.
          </p>
          <p>
            <img src={cons} />
          </p>
          <p>
            <b>Example : </b>In the above figure, there are three accounts, A,
            B, and C, where A is making a transaction T one by one to both B &
            C. There are two operations that take place, i.e., Debit and Credit.
            Account A firstly debits $50 to account B, and the amount in account
            A is read $300 by B before the transaction. After the successful
            transaction T, the available amount in B becomes $150. Now, A debits
            $20 to account C, and that time, the value read by C is $250 (that
            is correct as a debit of $50 has been successfully done to B). The
            debit and credit operation from account A to C has been done
            successfully. We can see that the transaction is done successfully,
            and the value is also read correctly. Thus, the data is consistent.
            In case the value read by B and C is $300, which means that data is
            inconsistent because when the debit operation executes, it will not
            be consistent.
          </p>
          <h2>3. Isolation</h2>
          <p>
            The term 'isolation' means separation. In DBMS, Isolation is the
            property of a database where no data should affect the other one and
            may occur concurrently. In short, the operation on one database
            should begin when the operation on the first database gets complete.
            It means if two operations are being performed on two different
            databases, they may not affect the value of one another. In the case
            of transactions, when two or more transactions occur simultaneously,
            the consistency should remain maintained. Any changes that occur in
            any particular transaction will not be seen by other transactions
            until the change is not committed in the memory.
          </p>
          <p>
            <b>Example : </b> If two operations are concurrently running on two
            different accounts, then the value of both accounts should not get
            affected. The value should remain persistent. As you can see in the
            below diagram, account A is making T1 and T2 transactions to account
            B and C, but both are executing independently without affecting each
            other. It is known as Isolation.{" "}
          </p>
          <p>
            <img src={isolation} />
          </p>
          <h2>4. Durability</h2>
          <p>
            Durability ensures the permanency of something. In DBMS, the term
            durability ensures that the data after the successful execution of
            the operation becomes permanent in the database. The durability of
            the data should be so perfect that even if the system fails or leads
            to a crash, the database still survives. However, if gets lost, it
            becomes the responsibility of the recovery manager for ensuring the
            durability of the database. For committing the values, the COMMIT
            command must be used every time we make changes.
          </p>
          <p>
            Therefore, the ACID property of DBMS plays a vital role in
            maintaining the consistency and availability of data in the
            database.
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
          When only one instance of the entity on the left, and more than one instance of an entity on the right associates with the relationship then this is known as a one-to-many relationship.
          </p>
          <p>
            <b>For example, </b>Scientist can invent many inventions, but the invention is done by the only specific scientist.
          </p>
          <p>
            <b>c. Many-to-one relationship</b>
          </p>
          <p>
          When more than one instance of the entity on the left, and only one instance of an entity on the right associates with the relationship then it is known as a many-to-one relationship.
          </p>
          <p>
            <b>For example, </b>Student enrolls for only one course, but a course can have many students.
          </p>
          <p>
            <b>d. Many-to-many relationship</b>
          </p>
          <p>
          When more than one instance of the entity on the left, and more than one instance of an entity on the right associates with the relationship then it is known as a many-to-many relationship.
          </p>
          <p>
            <b>For example, </b>Employee can assign by many projects and project can have many employees.
          </p>
        </div>
        <div id="normalization" className="tutorials">
          <h1>Functional Dependency</h1>
          <p>The functional dependency is a relationship that exists between two attributes. It typically exists between the primary key and non-key attribute within a table.</p>
          <p><b>X   →   Y </b> </p>
          <p>The left side of FD is known as a determinant, the right side of the production is known as a dependent.</p>
          <h3>For example:</h3>
          <p>Assume we have an employee table with attributes: Emp_Id, Emp_Name, Emp_Address.</p>
          <p>Here Emp_Id attribute can uniquely identify the Emp_Name attribute of employee table because if we know the Emp_Id, we can tell that employee name associated with it.</p>
          <p>Functional dependency can be written as: <b>Emp_Id → Emp_Name   </b></p>
          <h1>Types of Functional dependency</h1>
          <p><img src={FD1}/></p>
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
              A → B has a non-trivial functional dependency if B is not a subset of A.
              </li>
              <li>
              When A intersection B is NULL, then A → B is called as complete non-trivial.
              </li>
            </ul>
          </p>
          <h1>Normalization</h1>
          <p>A large database defined as a single relation may result in data duplication. This repetition of data may result in:</p>
          <p>
            <ul>
              <li>Making relations very large.</li>
              <li>It isn't easy to maintain and update data as it would involve searching many records in relation.</li>
              <li>Wastage and poor utilization of disk space and resources.</li>
              <li>The likelihood of errors and inconsistencies increases.</li>
            </ul>
          </p>
          <p>So to handle these problems, we should analyze and decompose the relations with redundant data into smaller, simpler, and well-structured relations that are satisfy desirable properties. Normalization is a process of decomposing the relations into relations with fewer attributes.</p>
          <h1>What is Normalization?</h1>
          <p>
            <ul>
              <li>Normalization is the process of organizing the data in the database.</li>
              <li>Normalization is used to minimize the redundancy from a relation or set of relations. It is also used to eliminate undesirable characteristics like Insertion, Update, and Deletion Anomalies.</li>
              <li>Normalization divides the larger table into smaller and links them using relationships.</li>
              <li>The normal form is used to reduce redundancy from the database table.</li>
            </ul>
          </p>
          <h1>Types of Normal Forms:</h1>
          <p>Normalization works through a series of stages called Normal forms. The normal forms apply to individual relations. The relation is said to be in particular normal form if it satisfies constraints.</p>
          <p><img src={NF1} /></p>
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
