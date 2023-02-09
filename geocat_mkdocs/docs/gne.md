# GeoNetwork

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

[Subscribe to our newsletter](#){ .md-button .md-button--primary }

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor massa, nec semper lorem quam in massa.

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

    graph LR
        A[Start] --> B{Error?};
        B -->|Yes| C[Hmm...];
        C --> D[Debug];
        D --> B;
        B ---->|No| E[Yay!];

## Metadata states

With the metadata workflow, the metadata goes through a set of states:

``` mermaid
graph TD
  A[Start] --> |Create metadata record| B[Draft];
  B -->|Submit for review| C[Submitted];
  C --> |Reject approval| B[Draft];
  C -->|Approve| D[Approved];
  D -. Publication .-> E[Published]
  style E fill:#8BC34A,stroke:#4CAF50,color: #36464e
```

* **Draft**: the record is new or being edited.
* **Submitted**: the record has been submitted for approval to a Content Reviewer.
* **Approved**: the Content Reviewer has reviewed the metadata and approved it.

## Working copy

When an approved metadata is edited, a working copy is created from the approved metadata.

The metadata has 2 versions: `approved` and `working copy`

``` mermaid
graph TD
  A[Approved metadata] --> |Edit metadata| C[Working copy: Draft];
  C -->|Submit for review| D[Submitted];
  D --> |Reject approval| C;
  D -->|Approve| E[Approved];
  E --> F[Working copy]
  F --> |replaces| G[Approved metadata]
  style A fill: #8BC34A,stroke: #4CAF50,color: #36464e
  style G fill: #8BC34A,stroke: #4CAF50,color: #36464e
  style C fill: #FFC107,stroke: #FF9800,color: #36464e
  style F fill: #FFC107,stroke: #FF9800,color: #36464e
```

Changes are done to the working copy, that should go through the approval process.

Once approved, the content of the working copy replaces the approved version and the working copy is removed.

![Schema](assets/images/geoserver_data_directory_dark.svg)

Images can be different for _light_ and _dark_ mode:

![Schema](assets/images/geoserver_data_directory.svg#only-light)
![Schema](assets/images/geoserver_data_directory_dark.svg#only-dark)

## SVG Testing ground

![Schema](assets/images/geoserver_webadministration.svg)