import { ITodo } from "./todo.service";

export class DataService {
  private data: ITodo[] = [
    {
      title: 'Todo 1',
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

    },
    {
      title: 'Todo 2',
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
      title: 'Todo 3',
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"
    },
    {
      title: 'Todo 4',
      text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    },
    {
      title: 'Todo 5',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam ex, aliquet sit amet libero vestibulum, dignissim accumsan purus. Vivamus sed velit tellus. In purus diam, efficitur ac risus ac, sodales sagittis felis. Phasellus urna tellus, semper eu justo nec, tincidunt fermentum lorem. Sed a leo nec lacus malesuada efficitur quis et ante. Suspendisse viverra viverra odio, ac lacinia purus dictum sed. Maecenas commodo tellus a neque mattis dignissim. Donec eu tristique augue. Sed sed neque dui. Duis purus tellus, venenatis ut nulla fringilla, vestibulum blandit felis. Donec vitae massa eu nisi consequat bibendum ut et nulla. Nam suscipit porttitor odio, a elementum dolor tincidunt at. Morbi libero risus, dapibus sit amet imperdiet nec, dignissim sed felis."
    },
    {
      title: 'Todo 6',
      text: "Nulla facilisi. Maecenas eleifend, nisl eget ultricies suscipit, sapien mauris maximus elit, in imperdiet massa metus at metus. Maecenas pellentesque urna eget arcu scelerisque convallis. Sed finibus posuere aliquam. Sed lobortis risus sagittis est elementum feugiat ut ut turpis. Curabitur ac porta nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam gravida vestibulum augue, sed pretium elit blandit vel. Nunc pharetra pulvinar mauris, vitae tincidunt eros vehicula non. Pellentesque pellentesque vel metus in auctor. Nunc tempor nisl quam, sit amet faucibus mauris posuere et. Aliquam euismod elit nec nisi tincidunt finibus. Phasellus quis elit fermentum, consectetur quam a, hendrerit tortor. Maecenas augue dolor, blandit eget ex a, laoreet gravida justo."
    },
    {
      title: 'Todo 7',
      text: "Ut consectetur posuere justo vel malesuada. Nullam mi dolor, venenatis rutrum dapibus at, mattis ac lorem. Mauris non ante lectus. Curabitur fringilla turpis id sem tincidunt pharetra. Mauris non ipsum massa. Mauris sit amet sem sapien. Donec posuere ac nunc vitae varius. Mauris ac justo nec sapien volutpat eleifend in vitae dolor."
    },
    {
      title: 'Todo 8',
      text: "Nulla est est, aliquet sit amet est sed, suscipit molestie risus. Nunc auctor condimentum vestibulum. Donec ut finibus ex. Suspendisse arcu orci, viverra vitae magna a, sagittis imperdiet turpis. Nunc ut volutpat nisi, eget facilisis nulla. Duis non lacus eu massa varius ullamcorper. Proin tempor ornare convallis. Vivamus facilisis sed lacus eu ultrices. Ut volutpat, lectus id scelerisque aliquet, nisi diam euismod orci, et lobortis lacus dolor ac arcu. Donec elementum nulla a neque condimentum, at tristique sem mollis. Ut gravida neque magna, eu ullamcorper leo blandit in."
    },
    {
      title: 'Todo 9',
      text: "Vestibulum malesuada massa vitae nisl tincidunt, at lobortis neque consectetur. Sed sagittis imperdiet dictum. Duis sit amet suscipit nisl, sed rutrum sem. Curabitur semper, mi dignissim auctor tristique, risus nisl lobortis ante, commodo semper orci eros sed sapien. Nunc tincidunt tellus non sapien accumsan, et sollicitudin ligula rhoncus. Nullam felis nunc, rhoncus quis volutpat sit amet, gravida at nibh. In nec porttitor eros. Nunc efficitur tincidunt accumsan. Duis quis facilisis sem, vitae dignissim enim. Mauris at rhoncus urna, at ornare massa. Integer id congue ipsum. Phasellus metus dolor, consectetur a efficitur et, pretium vel risus. Suspendisse gravida metus et porta fermentum."
    },
    {
      title: 'Todo 10',
      text: "In arcu erat, pellentesque sed tellus sed, rutrum tempor nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum in risus porttitor, sodales eros eget, vestibulum nunc. Ut feugiat semper libero, ac sodales risus pharetra nec. Vivamus aliquet commodo dictum. Phasellus cursus semper eros, id tempus leo rutrum at. Nulla consectetur pharetra lorem a feugiat. Nam nulla lacus, gravida et mauris eget, ullamcorper posuere nunc. Nunc pretium gravida turpis, sit amet interdum purus gravida a. In eu euismod tortor, a vehicula urna. Nullam sit amet quam id massa egestas vestibulum. Aenean congue interdum vulputate."
    },
    {
      title: 'Todo 11',
      text: "Morbi hendrerit convallis pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultrices lectus non diam luctus pulvinar. Aenean eget ante nec ex varius commodo semper sit amet velit. Phasellus congue eu odio sit amet scelerisque. Maecenas sed ultrices odio, a scelerisque risus. Pellentesque hendrerit interdum libero in commodo. Proin ut ante id orci rutrum porta id in neque. In maximus nibh et erat rhoncus, et consequat nulla condimentum. Maecenas in suscipit leo, id ornare urna."
    },
    {
      title: 'Todo 12',
      text: "In sollicitudin sapien quis lorem venenatis, non dictum nunc faucibus. Vivamus egestas massa ut erat fringilla laoreet. Donec feugiat ex nec leo tempor mollis. Nulla condimentum tristique ante sit amet cursus. Pellentesque vitae libero ullamcorper, rutrum tellus in, blandit lorem. Sed at urna arcu. Nulla ut consequat nisl, ut sodales dolor. Vestibulum pellentesque metus ut turpis dignissim, nec lobortis odio dignissim. Fusce faucibus, massa nec ultricies consequat, massa arcu facilisis magna, a viverra odio magna a lorem. Donec sollicitudin dictum felis, eget tristique mauris fermentum vitae. Aliquam facilisis enim interdum, vulputate ex vel, volutpat libero. Nulla maximus est sit amet sapien faucibus, sed iaculis metus ullamcorper."
    },
    {
      title: 'Todo 13',
      text: "Praesent sed faucibus magna. Etiam lobortis congue felis. Suspendisse sit amet nisl lacus. Praesent posuere enim at nisi fringilla tincidunt. Duis ut nulla nisl. Vivamus pellentesque malesuada fermentum. Nulla eros nisl, sodales non eros id, tempor scelerisque risus. Mauris vulputate sagittis malesuada. Mauris vel sapien congue, porta odio vel, laoreet mauris. Aliquam eu libero metus."
    },
    {
      title: 'Todo 14',
      text: "Sed a porttitor urna. Nam vulputate scelerisque augue vitae volutpat. Aliquam eget ligula vel lacus vulputate tristique. Cras vitae massa vel lacus iaculis ullamcorper sed in justo. Proin fermentum nisl ac ante elementum, quis bibendum orci vestibulum. Maecenas suscipit scelerisque convallis. Donec erat ante, commodo eget mauris vitae, porta congue justo. Maecenas ac sapien elit. Integer vitae commodo risus. Curabitur ac imperdiet dui. Etiam rutrum pellentesque ante, ut viverra tortor congue non."
    },
    {
      title: 'Todo 15',
      text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sit amet ligula nibh. Etiam imperdiet, leo et scelerisque luctus, nunc nulla aliquet turpis, ut aliquam leo ipsum a erat. Nunc feugiat enim viverra, dictum nunc quis, tincidunt odio. Pellentesque gravida venenatis nisl, ut finibus velit vehicula et. Sed suscipit ex eros, vel fringilla nisl condimentum eu. Morbi ornare arcu vitae sem tincidunt, at vehicula est interdum. Curabitur bibendum ex et tempor aliquet. Cras at magna quis lectus maximus eleifend. Nullam venenatis magna et mattis elementum. Aenean a laoreet leo. Donec in mauris eget metus vulputate ornare in id elit. Sed porttitor leo odio. Donec molestie metus ac metus commodo condimentum. Fusce aliquet metus sit amet bibendum tincidunt. Fusce varius dapibus blandit."
    }
  ];

  getData() {
    return this.data;
  }
}
