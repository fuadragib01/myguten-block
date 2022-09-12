const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } =
  wp.blockEditor;

const { PanelBody, IconButton, RangeControl } = wp.components;

// line 1 is destructuring. it can be written as line 3
// const registerBlockType = wp.block.registerBlockType;

registerBlockType("myguten-block/test-block", {
  title: "Call to Action",
  description: "Block to generate a custom Call to Action",
  icon: "thumbs-up",
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h3",
    },
    titleColor: {
      type: "string",
      default: "black",
    },
    body: {
      type: "string",
      source: "html",
      selector: "p",
    },
    backgroundImage: {
      type: "string",
      default: null,
    },
	overlayColor: {
		type: 'string',
		default: 'black'
	},
	overlayOpacity: {
		type: 'string',
		default: '0.3'
	}
  },
  category: "common",

  edit: (props) => {
    const { attributes, setAttributes } = props;

    const { title, body, titleColor, backgroundImage, overlayColor, overlayOpacity } = attributes;

    function setTitle(newTitle) {
      setAttributes({ title: newTitle });
    }

    function setBody(newBody) {
      setAttributes({ body: newBody });
    }

    function setTitleColor(newColor) {
      setAttributes({ titleColor: newColor });
    }

    function onSelectImage(newImage) {
      setAttributes({ backgroundImage: newImage.sizes.full.url });
    }

	function onOverlayColorChange(newOverlayColor) {
		setAttributes({ overlayColor: newOverlayColor });
	}

	function onOverlayOpacityChange(newOpacity) {
		console.log({newOpacity});
		setAttributes({ overlayOpacity: `${newOpacity}` });
	}
	console.log('from edit', overlayOpacity);
    return [
      <InspectorControls>
        <PanelBody title={"Font color setttings"}>
          <p>
            <strong>Select a title color</strong>
          </p>
          <ColorPalette value={titleColor} onChange={setTitleColor} />
        </PanelBody>
        <PanelBody title={"Background Image setttings"}>
          <p>
            <strong>Select a background image</strong>
          </p>
          {/* <MediaUpload
            onSelect={onSelectImage}
            allowedTypes={["image"]}
            value={backgroundImage}
            render={({ open }) => (
              <IconButton icon="upload" onClick={open}>
                Open Media Library
              </IconButton>
            )}
          /> */}
          <MediaUpload
            onSelect={onSelectImage}
            allowedTypes={["image"]}
            value={backgroundImage}
            render={({ open }) => (
              <IconButton onClick={open} icon="upload" className="editor-media-placeholder__button is-button is-default is-large">Select Image</IconButton>
			)}
          />
		  <div style={{marginTop: '20px', marginBottom: '40px'}}>
				<p><strong>Overlay Color:</strong></p>
				<ColorPalette value={overlayColor} onChange={onOverlayColorChange} />
		  </div>
		  <RangeControl label={'Overlay Opacity'} value={ parseFloat( overlayOpacity) } onChange={ onOverlayOpacityChange } min={ 0 } max={ 1 } step={ 0.05 }/>
        </PanelBody>
      </InspectorControls>,

      <div class="cta-container" style={{
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	  }}>
		<div className="cta-overlay" style={{background: overlayColor, opacity: overlayOpacity}}></div>
        <RichText
          key="editable"
          tagName="h3"
          placeholder="Your CTA Title"
          value={title}
          onChange={setTitle}
          style={{ color: titleColor }}
        />
        <RichText
          key="editable"
          tagName="p"
          placeholder="Your CTA Description"
          value={body}
          onChange={setBody}
        />
      </div>,
    ];
  },

  save: (props) => {
    const { attributes } = props;

    const { title, titleColor, body, backgroundImage, overlayColor, overlayOpacity } = attributes;
	console.log('from save', overlayOpacity);
    return (
      <div class="cta-container" style={{
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	  }}>
	  	<div className="cta-overlay" style={{background: overlayColor, opacity: `${overlayOpacity}`}}></div>
        <h3 style={{ color: titleColor }}>{title}</h3>
        <RichText.Content tagName="p" value={body} />
      </div>
    );
  },
});
