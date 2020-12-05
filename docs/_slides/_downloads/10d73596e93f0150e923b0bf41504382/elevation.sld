<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>elevation_points</Name>
    <UserStyle>
      <Title>Elevation Points</Title>
      <FeatureTypeStyle>
        <Rule>
          <Title>azure point</Title>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>cross</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#333333</CssParameter>
                </Fill>
              </Mark>
              <Size>3</Size>
            </Graphic>
          </PointSymbolizer>
          <TextSymbolizer>
           <Label>
             <ogc:PropertyName>elevation</ogc:PropertyName> m
           </Label>
           <LabelPlacement>
             <PointPlacement>
               <AnchorPoint>
                 <AnchorPointX>0.5</AnchorPointX>
                 <AnchorPointY>0.0</AnchorPointY>
               </AnchorPoint>
               <Displacement>
                 <DisplacementX>0</DisplacementX>
                 <DisplacementY>2</DisplacementY>
               </Displacement>
             </PointPlacement>
           </LabelPlacement>
          </TextSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
