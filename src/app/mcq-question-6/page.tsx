import LinkButton from '@/components/LinkButton';
import Image from 'next/image';

// answer is D
export default () => (
	<>
		<LinkButton path="/mcq-answers">Back</LinkButton>
		<style>
			{`.float-image {
            float: left;
            margin: 0 15px 15px 0;
        }`}
		</style>
		<div>
			<Image
				src="/images/cute-cat-pic.jpeg"
				alt="cute cat"
				width={200}
				height={200}
				className="float-image"
			/>
			<p>
				Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat aliquam
				imperdiet fermentum facilisis ut. Gravida erat dignissim aliquet sit
				penatibus nisi dis platea cubilia. Nulla natoque potenti ridiculus non
				justo proin sodales. Mauris consectetur lectus vitae feugiat nisl montes
				amet sociosqu. Vel ultrices ex inceptos mi at in sollicitudin nisi.
				Justo litora pretium fermentum hendrerit amet. Amet posuere taciti urna
				lacus placerat eget mi diam quisque. Egestas tristique rhoncus felis
				ante penatibus consequat. In dui id accumsan augue ad semper. Magnis
				accumsan congue ipsum sed nec commodo facilisis. In vitae dapibus in
				auctor ligula varius pulvinar nibh orci. Auctor odio primis hac dui
				nulla inceptos. Convallis pulvinar tempor enim mi ultricies nisl
				tincidunt elementum. Ex risus ipsum id quis maximus torquent. Varius
				scelerisque habitant litora a efficitur purus elementum vitae class.
				Facilisi metus mollis ut parturient nullam etiam. Senectus rhoncus
				consectetur urna pulvinar sem. Litora sociosqu primis risus mollis ipsum
				arcu lorem ac. Penatibus purus nibh erat egestas euismod nunc. Praesent
				neque sem justo metus nunc convallis luctus dapibus per. Himenaeos
				congue primis fusce quam vulputate conubia nascetur lobortis nulla.
				Accumsan montes duis montes in velit sodales mus volutpat primis. Taciti
				feugiat turpis class porttitor tempor facilisi imperdiet neque.
				Penatibus ut non, egestas tristique litora urna proin eleifend. Morbi
				laoreet viverra taciti vestibulum; sem bibendum. Praesent mollis varius
				congue magnis rutrum efficitur velit. Suscipit congue feugiat massa
				suscipit proin, nisi donec. Purus dui adipiscing netus aliquet fusce.
				Dolor ligula phasellus egestas sem at nunc fusce. Hac rutrum urna
				maecenas congue pharetra potenti imperdiet. Tristique pretium est
				faucibus vestibulum erat mauris. Semper suspendisse scelerisque accumsan
				praesent pharetra eu fames fermentum. At eu parturient dis, cubilia
				sociosqu magna viverra. Magna enim consectetur mus interdum libero
				torquent. Mattis augue senectus dolor vestibulum, volutpat himenaeos
				suscipit taciti pellentesque. Pulvinar placerat quis pulvinar aliquam
				natoque a tincidunt ornare. Facilisi tempus pellentesque cras
				pellentesque enim faucibus. Tortor vehicula natoque non nam; torquent
				taciti non. Ad vitae etiam risus nulla curabitur luctus quis orci.
				Scelerisque aenean mus vulputate metus facilisi cras ipsum. Dis varius
				bibendum fames, proin efficitur curabitur.
			</p>
		</div>
	</>
);
